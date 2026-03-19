import { Router } from "express";

import {
  createUser,
  getUsers,
  loginUser,
  passwordChange,
} from "../controllers/user.controller.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import userValidation from "../validations/user.validation.js";

const router = Router();

router.post("/", userValidation.loginUser, createUser);
router.get("/", authMiddleware, getUsers);
router.patch("/", passwordChange);
router.post("/login", userValidation.loginUser, loginUser);

export default router;
