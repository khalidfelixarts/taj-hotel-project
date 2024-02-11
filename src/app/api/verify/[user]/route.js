import { User } from "@/server/db/models/user.schema";
import { NextResponse } from "next/server";
import db from "@/server/db/setupDB";

export async function GET(request, { params }) {
  db();
  try {
    const userId = params.user;
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.isVerified = true;

    await user.save();

    return NextResponse.redirect(new URL("/", request.url));
    // return NextResponse.json({ success: "success" });
  } catch (e) {
    return NextResponse.json({ error: e.message });
  }
}
