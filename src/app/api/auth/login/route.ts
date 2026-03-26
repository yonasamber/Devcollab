import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });

  if (!user)
    return NextResponse.json({ success: false, message: "User not found" });

  const match = await bcrypt.compare(password, user.password);

  if (!match)
    return NextResponse.json({ success: false, message: "Incorrect password" });

  const token = createToken(user._id.toString());
  return NextResponse.json({ success: true, token });
}
