import express from "express";
import { getProfile, updateProfile } from "../controllers/student.controller.js";
import { applyJob } from "../controllers/student.controller.js";

const router = express.Router();

router.get("/profile", getProfile);
router.put("/profile", updateProfile);
router.post("/apply", applyJob);

export default router;
