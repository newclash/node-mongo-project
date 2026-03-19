import userService from "../services/user.service.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});

export const passwordChange = asyncHandler(async (req, res) => {
  await userService.passwordChange(req.body);
  res.json({ message: "Password updated successfully" });
});

export const getUsers = asyncHandler(async (_, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
});

export const loginUser = asyncHandler(async (req, res) => {
  const token = await userService.loginUser(req.body);
  res.status(200).json({
    message: "Login successful",
    token,
  });
});
