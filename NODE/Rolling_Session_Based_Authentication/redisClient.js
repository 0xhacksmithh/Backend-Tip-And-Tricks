import { createClient } from "redis";

export const redisClient = createClient({
  url: "redis://localhost:6379",
  // reconnection strategy
  socket: {
    reconnectStrategy: (retries) => Math.min(retries * 50, 500),
  },
});

redisClient.on(`error`, (err) => {
  console.error("Redis Runtime Error", err);
});

redisClient
  .connect()
  .then(() => {
    console.log("Redis Connected");
  })
  .catch((err) => {
    console.error("Redis stratup failure", err);
    process.exit(1);
  });
