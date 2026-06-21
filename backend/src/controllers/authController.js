import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {
  createUser,
  findUserByEmail,
  getUserById
} from "../services/authService.js";

export const register = async (
  req,
  res
) => {
  try {
    const {
      username,
      email,
      password,
      address
    } = req.body;

    const existing =
      await findUserByEmail(email);

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Email already in use"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const userId =
      await createUser(
        username,
        email,
        hashedPassword,
        address
      );

    res.status(201).json({
      success: true,
      message: "User registered",
      userId
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const login = async (
  req,
  res
) => {
  try {
    const { email, password } =
      req.body;

    const user =
      await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const match =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    ); 
    console.log("LOGIN SECRET:", process.env.JWT_SECRET);

    res.status(200).json({
      success: true,
      token
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getUser = async (
  req,
  res
) => {
  try {
    const user =
      await getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};