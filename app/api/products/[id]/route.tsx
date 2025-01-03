import { NextResponse, type NextRequest } from "next/server";
import userSchema from "../schema";

export const GET = (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json([
    { id: params.id, name: "Awesome Product " + params.id },
  ]);
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  const body = await request.json();
  const validatedBody = userSchema.safeParse(body);

  if (!validatedBody.success) {
    return NextResponse.json(
      { error: validatedBody.error.errors },
      { status: 400 }
    );
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const updatedUser = { id: params.id, name };

  return NextResponse.json({
    success: true,
    product: updatedUser,
  });
};

export const DELETE = (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    product: { id: params.id, name: "Awesome Product " + params.id },
  });
};
