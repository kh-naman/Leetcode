import express from "express"
import { register,login,logout,me } from "../controllers/auth.controller.js";
import { authMiddleware } from "../milddleware/auth.middleware.js";

const authRoutes = express.Router();

authRoutes.post('/register',register)
authRoutes.post('/login',login)
authRoutes.get('/logout', authMiddleware,logout)
authRoutes.get('/me', authMiddleware, me)

export default authRoutes