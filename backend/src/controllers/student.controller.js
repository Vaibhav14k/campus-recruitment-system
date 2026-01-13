import User from "../models/User.js";
import Job from "../models/Job.js";

// GET PROFILE
export const getProfile = async (req, res) => {
    try {
        const { email } = req.query;

        const user = await User.findOne({ email }).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// UPDATE PROFILE
export const updateProfile = async (req, res) => {
    try {
        const { email } = req.query;

        const updatedUser = await User.findOneAndUpdate(
            { email },
            req.body,
            { new: true }
        ).select("-password");

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
export const applyJob = async (req, res) => {
    try {
        const { jobId, studentEmail } = req.body;

        const job = await Job.findById(jobId);

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        const alreadyApplied = job.applications.some(
            (app) => app.studentEmail === studentEmail
        );

        if (alreadyApplied) {
            return res.status(400).json({ message: "Already applied" });
        }

        job.applications.push({
            studentEmail,
            status: "pending",
        }); await job.save();

        res.status(200).json({ message: "Applied successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
