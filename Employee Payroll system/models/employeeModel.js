import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    avatar: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    departments: {
      type: [String],
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    startDay: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: Number,
      required: true,
    },
    startYear: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);