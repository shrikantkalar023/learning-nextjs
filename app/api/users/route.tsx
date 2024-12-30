import prisma from "@/prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import userSchema from "./schema";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

// NOTE: even though we aren't using request:NextRequest, we need it so that nextjs doesn't cache the response
export const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validatedBody = userSchema.safeParse(body);

  if (!validatedBody.success) {
    return NextResponse.json(
      { error: validatedBody.error.errors },
      { status: 400 }
    );
  }

  const newUser = { name: validatedBody.data.name, id: users.length + 1 };
  users.push(newUser);
  return NextResponse.json({ success: true, user: newUser }, { status: 201 });
};
