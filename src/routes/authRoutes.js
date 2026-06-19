import express from "express";
import { body } from "express-validator";

import {
  register,
  login,
  getUser
} from "../controllers/authController.js";

import authenticate from "../middleware/authMiddleware.js";
import validate from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username required"),

    body("email")
      .isEmail()
      .withMessage("Valid email required"),

    body("password")
      .isLength({ min: 6 })
      .withMessage(
        "Password must be at least 6 characters"
      ),

    body("address")
      .trim()
      .notEmpty()
      .withMessage("Address required")
  ],
  validate,
  register
);

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").notEmpty()
  ],
  validate,
  login
);

router.get(
  "/users/:id",
  authenticate,
  getUser
);

export default router;