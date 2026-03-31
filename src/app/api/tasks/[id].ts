import { connectDB } from "@/lib/db";
import Task from "@/models/Task";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectDB();

  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const { title, priority, status, dueDate } = req.body;

      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { title, priority, status, dueDate },
        { new: true },
      );
      res.status(200).json(updatedTask);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to update task" });
    }
  } else if (req.method === "DELETE") {
    try {
      await Task.findByIdAndDelete(id);
      res.status(200).json({ message: "Task deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to delete task" });
    }
  } else {
    res.setHeader("Allow", ["PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
