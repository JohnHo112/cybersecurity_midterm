import { Router } from "express";
import { rewrite } from "./handler.js";

const router = Router();
router.post(`/rewrite`, rewrite);

export default router;