import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

export async function POST(req: Request) {
  await connectDB();
  const { name, email, password } = await req.json();

  const existing = await User.findOne({ email });
  if (existing)
    return NextResponse.json({ success: false, message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  const token = createToken(user._id.toString());

  return NextResponse.json({ success: true, token });
}
