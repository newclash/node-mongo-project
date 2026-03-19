import jwt from "jsonwebtoken";
import User from "../models/User.js";

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email || null,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    }
  );

  return token;
};

const getAllUsers = async () => {
  const users = User.find();

  return users;
};

const passwordChange = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  user.password = password;
  await user.save();
};

const createUser = async (requestBody) => {
  const user = await User.create(requestBody);

  return user;
};

export default {
  loginUser,
  getAllUsers,
  passwordChange,
  createUser,
};
