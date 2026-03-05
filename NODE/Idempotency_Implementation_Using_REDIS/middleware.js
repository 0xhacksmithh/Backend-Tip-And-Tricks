import { redisClient } from "./redisClient";

const IDEMPOTENCY_TTL = 60 * 60 * 24; // 24hr

export const idempotencyMiddleware = (req, res, next) => {
  const key = req.headers["idempotency-key"];
  if (!key) {
    return res.status(400).json({
      error: "Idempotency Key Not Found",
    });
  }

  const redisKey = `idem:${key}`;

  (async () => {
    const existing = await redisClient.get(redisKey);
    if (existing) {
      const data = JSON.parse(existing);
      if (data.status === "completed") {
        return res.status(data.statusCode).json(data.response);
      }

      if (data.status === "processing") {
        return res.status(409).json({
          message: "Request already in progress",
        });
      }
    }

    await redisClient.set(redisKey, JSON.stringify({ status: "processing" }), {
      EX: IDEMPOTENCY_TTL,
    });

    const originalSend = res.json.bind(res);

    res.json = async (body) => {
      await redisClient.set(
        redisKey,
        JSON.stringify({
          status: "completed",
          response: body,
          statusCode: res.statusCode,
        }),
        { EX: IDEMPOTENCY_TTL },
      );

      return originalSend(body);
    };

    next();
  })().catch(next);
};
