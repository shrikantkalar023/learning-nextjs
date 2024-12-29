import { NextResponse, type NextRequest } from "next/server";

// NOTE: even though we aren't using request:NextRequest, we need it so that nextjs doesn't cache the response
export const GET = (request: NextRequest) => {
  return NextResponse.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);

  //  return new Response(JSON.stringify(users), {
  //    headers: { "Content-Type": "application/json" },
  //  });
};
