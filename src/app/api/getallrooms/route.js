import { NextResponse } from "next/server";
import { getAllRoomsAction } from "@/server/actions/adminAdd.action";

export async function GET(req) {
  let rooms = await getAllRoomsAction();
  rooms = JSON.parse(rooms);
  rooms = rooms?.rooms;
  console.log(rooms);

  return NextResponse.json(rooms, { status: 200 });
}
