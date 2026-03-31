import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    projectId: { type: String, required: true },
    assignedTo: { type: String, default: "" },
    status: { type: String, enum: ["todo", "doing", "done"], default: "todo" },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    labels: [
      {
        name: String,
        color: String,
      },
    ],
    comments: [
      {
        text: String,
        createdAt: Date,
      },
    ],
    dueDate: { type: Date },
  },
  { timestamps: true },
);

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
