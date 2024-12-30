import { NextResponse, type NextRequest } from "next/server";
import productSchema from "./schema";

const products = [
  { id: 1, name: "Milk", price: 2.5 },
  { id: 2, name: "Bread", price: 3.5 },
];

export const GET = (request: NextRequest) => {
  return NextResponse.json(products);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validatedBody = productSchema.safeParse(body);

  if (!validatedBody.success) {
    return NextResponse.json(
      { error: validatedBody.error.errors },
      { status: 400 }
    );
  }

  const newProduct = {
    id: products.length + 1,
    name: validatedBody.data.name,
    price: validatedBody.data.price,
  };
  products.push(newProduct);
  return NextResponse.json(
    { success: true, product: newProduct },
    { status: 201 }
  );
};
