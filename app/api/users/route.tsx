import prisma from "@/prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import userSchema from "./schema";

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

  const user = await prisma.user.findUnique({
    where: {
      email: validatedBody.data.email,
    },
  });

  if (user) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: validatedBody.data,
  });

  return NextResponse.json(newUser, { status: 201 });
};
