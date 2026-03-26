import { connectDB } from "@/lib/db";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const tasks = await Task.find();

  return NextResponse.json({ success: true, tasks });
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const task = await Task.create(body);

  return NextResponse.json({ success: true, task });
}
