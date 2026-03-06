import express from "express";
import { redisClient } from "redisClient";

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

app.use(
  fixWindowRateLimiter({
    windowSizeInSecond: 60,
    maxRequests: 100,
  }),
);

// Middlewares
function fixWindowRateLimiter({ windowSizeInSecond, maxRequests }) {
  return async (req, res, next) => {
    const identifier = req.id;
    const windowKey = `rate:${identifier}:${Math.floor(Date.now() / (windowSizeInSecond * 1000))}`;

    const current = await redisClient.incr(windowKey);

    if (current === 1) await redisClient.expire(windowKey, windowSizeInSecond);

    if (current > maxRequests) {
      return res.status(429).json({
        message: "Too Many Request",
      });
    }

    next();
  };
}

function slidingWindowRateLimiter({ windowInSec, maxReq }) {
  return async (req, res, next) => {
    const identifier = req.ip;
    const key = `rate:${identifier}`;
    const now = Date.now();
    const windowStart = now - windowInSec * 1000;

    await redisClient.zRemRangeByScore(key, 0, windowStart);

    await redisClient.zAdd(key, {
      score: now,
      value: `${now}-${Math.random()}`,
    });

    const requestCunt = await redisClient.zCard(key);

    await redisClient.expire(key, windowInSec);

    if (requestCunt > maxReq) {
      return res.status(401).json({
        message: "Too Many Requests",
      });
    }

    next();
  };
}

// Routes
app.get(
  "/getMe",
  slidingWindowRateLimiter({
    windowInSec: 50,
    maxReq: 4,
  }),
  (req, res) => {
    res.json({ message: "Fetching Meeeeee" });
  },
);

app.listen(PORT, () => {
  console.log(`Server Is Running On PORT :: ${PORT}`);
});
