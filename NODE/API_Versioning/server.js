import express from "express";

import routes from "./routes.js";
import versionMiddleware from "./middleware/version.middleware.js";

import { getUsers as getUsersV1 } from "./api/v1/controllers/user.controller.js";
import { getUsers as getUsersV2 } from "./api/v2/controllers/users.controllers.js";

const app = express();
const router = express.Router();

app.use(express.json());
app.use(versionMiddleware);

const PORT = process.env.PORT ? process.env.PORT : 3000;

app.use("/api", routes);

// Dynamic Version Routing
router.get("./users", (req, res) => {
  const version = req.apiVersion;

  if (version === "v2") return getUsersV2(req, res);
  return getUsersV2(req, res);
});

app.listen(PORT, () => {
  console.log(`Server Is Running On PORT :: ${PORT}`);
});
