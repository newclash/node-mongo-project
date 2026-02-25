import { Router } from "express";
import {
  createUser,
  getUsers,
  loginUser,
  passwordChange,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/", createUser);
router.get("/", authMiddleware, getUsers);
router.patch("/", passwordChange);
router.post("/login", loginUser);

export default router;
