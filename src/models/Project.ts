import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    owner: { type: String, required: true },
    members: { type: [String], default: [] },
  },
  { timestamps: true },
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
