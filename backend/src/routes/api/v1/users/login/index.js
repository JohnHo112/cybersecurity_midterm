import { Router } from "express";
import { login } from "./handlers.js";
import multer from "multer";

const router = Router();
router.post(`/`, login);
export default router;