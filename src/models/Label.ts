import mongoose from "mongoose";

const LabelSchema = new mongoose.Schema(
  {
    name: String,
    color: String,
  },
  { timestamps: true },
);

export default mongoose.models.Label || mongoose.model("Label", LabelSchema);
