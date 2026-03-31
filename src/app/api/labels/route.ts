import { connectDB } from "@/lib/db";
import Label from "@/models/Label";

export async function GET() {
  await connectDB();

  const labels = await Label.find();

  return Response.json(labels);
}
