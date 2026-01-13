import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  jobRole: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  minCGPA: {
    type: Number,
    required: true,
  },
  package: {
    type: String,
    required: true,
  },
  lastDate: {
    type: String,
    required: true,
  },
  applications: [
  {
    studentEmail: String,
    appliedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", "shortlisted", "rejected"],
      default: "pending",
    },
  },
],
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);
