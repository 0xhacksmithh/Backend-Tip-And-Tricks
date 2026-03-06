import { createClient } from "redis";

export const redisClient = createClient({
  url: "redis://localhost:6379",
  socket: {
    reconnectStrategy: (retries) => Math.min(retries * 50, 500),
  },
});

redisClient.on("error", (err) => {
  console.error("Redis Runtime Error", err);
});

redisClient
  .connect()
  .then(() => {
    console.error("Redis Connected");
  })
  .catch((err) => {
    console.error("Redis Startup Failure", err);
    process.exit(1);
  });
