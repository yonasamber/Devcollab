import { connectDB } from "@/lib/db";
import Task from "@/models/Task";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await connectDB();

  await Task.findByIdAndDelete(params.id);

  return NextResponse.json({
    success: true,
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await connectDB();

  const body = await req.json();
  const task = await Task.findByIdAndUpdate(params.id, body, { new: true });

  return NextResponse.json({ task });
}

export async function GET() {
  await connectDB();
  const tasks = await Task.find();

  return NextResponse.json({ success: true, tasks });
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const task = await Task.create({
      title: body.title,
      projectId: body.projectId,
      status: "todo",
    });
    return NextResponse.json({ success: true, task });
  } catch (error) {
    console.log("CREATE TASK ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 },
    );
  }
}
