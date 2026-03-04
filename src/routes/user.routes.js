import { Router } from "express";

import {
  createUser,
  getUsers,
  loginUser,
  passwordChange,
} from "../controllers/user.controller.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateLogin } from "../middleware/validateLogin.js";

const router = Router();

router.post("/", validateLogin, createUser);
router.get("/", authMiddleware, getUsers);
router.patch("/", passwordChange);
router.post("/login", validateLogin, loginUser);

export default router;
