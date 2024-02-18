"use server";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
  console.log("Middleware");

  const cookieStore = cookies();

  const session = cookieStore.get("session");
  console.log(session?.value);
  if (session?.value) return NextResponse.next();

  return NextResponse.next();
}
