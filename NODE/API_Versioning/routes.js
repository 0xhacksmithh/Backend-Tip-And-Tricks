import express from "express";

import v1Routes from "./api/v1/routes/users.routes.js";
import v2Routes from "./api/v2/routes/users.routes.js";

const router = express.Router();

router.use("/v1/users", v1Routes);
router.use("/v2/users", v2Routes);

export default router;
