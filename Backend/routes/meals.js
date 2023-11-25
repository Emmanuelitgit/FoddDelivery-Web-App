import express from "express";
import { getMeal } from "../controllers/meal.js";

const router = express.Router();

router.get("/meals", getMeal);

export default router;