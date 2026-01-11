import express from "express";
import { errorHandler } from "./utils";
import { users } from "./database";

const app = express();
app.use(express.json());

app.get(
  "/users",
  errorHandler(async (req, res) => {
    return res.json(users);
  })
);

app.post("/users", errorHandler());

app.listen(3000, () => {
  console.log(`Server is running on PORT :: 3000`);
});
