import express from "express";
import { signup } from "../controllers/authController.js";

const router = express.Router();

// AUTHENTICATION ROUTES

router.post('/signup', signup);

// USER ROUTES

export default router;
