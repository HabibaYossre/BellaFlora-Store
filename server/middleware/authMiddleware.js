import jwt from "jsonwebtoken";
import User from "../models/User.js";
import cookieParser from "cookie-parser";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token; // token from cookie

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token failed" });
  }
};
