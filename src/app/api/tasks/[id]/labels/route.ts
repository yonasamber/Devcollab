import { connectDB } from "@/lib/db";
import Task from "@/models/Task";

export async function PUT(req: Request, { params }: any) {
  await connectDB();

  const { label } = await req.json();

  const task = await Task.findById(params.id);
  task.labels.push(label);

  await task.save();
  return Response.json(task);
}
