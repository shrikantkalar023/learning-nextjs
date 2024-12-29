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

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  const { name } = await request.json();
  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = { id: params.id, name };

  return NextResponse.json({
    success: true,
    user: updatedUser,
  });
};

export const DELETE = (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    user: { id: params.id, name: "John " + params.id },
  });
};
