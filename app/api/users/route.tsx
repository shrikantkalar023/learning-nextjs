import { NextResponse, type NextRequest } from "next/server";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

// NOTE: even though we aren't using request:NextRequest, we need it so that nextjs doesn't cache the response
export const GET = (request: NextRequest) => {
  return NextResponse.json(users);
};

export const POST = async (request: NextRequest) => {
  const { name } = await request.json();

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const newUser = { name, id: users.length + 1 };
  users.push(newUser);
  return NextResponse.json({ success: true, user: newUser }, { status: 201 });
};
