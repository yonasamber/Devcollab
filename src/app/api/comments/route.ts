import { connectDB } from "@/lib/db";
import Comment from "@/models/Comment";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  const taskId = req.nextUrl.searchParams.get("taskId");

  const comments = await Comment.find({ taskId });

  return NextResponse.json({ comments });
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const { taskId, text } = body;

    if (!taskId || !text) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    const comment = await Comment.create({
      taskId,
      text,
    });

    return NextResponse.json({
      success: true,
      comment,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
