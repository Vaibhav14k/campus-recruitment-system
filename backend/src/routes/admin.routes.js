import express from "express";
import { postJob, getAllJobs } from "../controllers/admin.controller.js";
import { getDashboardStats } from "../controllers/admin.controller.js";
import { updateApplicationStatus } from "../controllers/admin.controller.js";
import { getJobsWithApplicants } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/jobs", postJob);
router.get("/jobs", getAllJobs);
router.get("/stats", getDashboardStats);
router.put("/application-status", updateApplicationStatus);

router.get("/jobs-applicants", getJobsWithApplicants);

export default router;
