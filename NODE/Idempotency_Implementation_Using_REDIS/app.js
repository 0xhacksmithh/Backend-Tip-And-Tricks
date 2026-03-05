import express from "express";
import { v4 as uuidv4 } from "uuidv4";
import { idempotencyMiddleware } from "./middleware.js";

const app = express();

app.use(express.json());

app.post("/orders", idempotencyMiddleware, async (req, res) => {
  const orderId = uuidv4();

  // Dummy simulation
  await new Promise((r) => setTimeout(r, 2000));

  res.status(201).json({
    orderId,
    status: "created",
  });
});

app.listen(3000, () => {
  console.log(`Server Running On Port : 3000`);
});
