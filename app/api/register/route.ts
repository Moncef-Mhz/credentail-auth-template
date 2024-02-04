import { connectMongoDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
const bcrypt = require("bcryptjs");

export async function POST(req: {
  json: () => { name: any; email: any; password: any };
}) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword: string = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "User registred" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "An error has occurred while registering the user." },
      { status: 500 }
    );
  }
}
