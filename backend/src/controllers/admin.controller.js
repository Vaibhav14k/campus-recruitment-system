import Job from "../models/Job.js";
import User from "../models/User.js";

// POST JOB
export const postJob = async (req, res) => {
  try {
    const {
      companyName,
      jobRole,
      branch,
      minCGPA,
      package: jobPackage,
      lastDate,
    } = req.body;

    // 🔒 basic validation
    if (
      !companyName ||
      !jobRole ||
      !branch ||
      !minCGPA ||
      !jobPackage ||
      !lastDate
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const job = await Job.create({
      companyName,
      jobRole,
      branch,
      minCGPA: Number(minCGPA), // ✅ ensure number
      package: jobPackage,
      lastDate,
    });

    res.status(201).json({
      success: true,
      message: "Job posted successfully",
      job,
    });
  } catch (error) {
    console.error("POST JOB ERROR:", error);
    res.status(500).json({
      message: "Server error while posting job",
    });
  }
};

// GET ALL JOBS
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
export const getDashboardStats = async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: "student" });
    const totalJobs = await Job.countDocuments();

    const jobs = await Job.find();
    const totalApplications = jobs.reduce(
      (sum, job) => sum + job.applications.length,
      0
    );

    res.status(200).json({
      totalStudents,
      totalJobs,
      totalApplications,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch stats" });
  }
};

// UPDATE APPLICATION STATUS
export const updateApplicationStatus = async (req, res) => {
  try {
    const { jobId, studentEmail, status } = req.body;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const application = job.applications.find(
      (app) => app.studentEmail === studentEmail
    );

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    application.status = status;
    await job.save();

    res.status(200).json({
      message: "Application status updated",
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update status" });
  }
};
// GET JOBS WITH APPLICANTS + AUTO STATUS
export const getJobsWithApplicants = async (req, res) => {
  try {
    const jobs = await Job.find();

    const result = [];

    for (const job of jobs) {
      const applicationsWithDetails = [];

      for (const app of job.applications) {
        const student = await User.findOne(
          { email: app.studentEmail },
          { name: 1, email: 1, cgpa: 1 }
        );

        if (!student) continue;

        // ✅ AUTO STATUS LOGIC
        const status =
          student.cgpa >= job.minCGPA ? "shortlisted" : "rejected";

        // update status in DB if changed
        if (app.status !== status) {
          app.status = status;
        }

        applicationsWithDetails.push({
          name: student.name,
          email: student.email,
          cgpa: student.cgpa,
          status,
        });
      }

      await job.save();

      result.push({
        jobId: job._id,
        companyName: job.companyName,
        jobRole: job.jobRole,
        minCGPA: job.minCGPA,
        applications: applicationsWithDetails,
      });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to load applicants" });
  }
};
