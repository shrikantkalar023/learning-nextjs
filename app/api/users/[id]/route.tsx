import { NextResponse, type NextRequest } from "next/server";

export const GET = (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json([{ id: params.id, name: "John " + params.id }]);
};
