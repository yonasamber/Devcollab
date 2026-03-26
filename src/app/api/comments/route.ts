import { connectDB } from "@/lib/db";
import Comment from "@/models/Comment";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const comments = Comment.find();
  return NextResponse.json({ success: true, comments });
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const comment = await Comment.create(body);
  return NextResponse.json({ success: true, comment });
}
