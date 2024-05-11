import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

type Props = {
  params: { id: number };
};

export const GET = (request: NextRequest, { params }: Props) => {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ id: params.id, name: "Egg", price: 3 });
};

export const PUT = async (request: NextRequest, { params }: Props) => {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({
    id: params.id,
    name: body["name"],
    price: body["price"],
  });
};

export const DELETE = (request: NextRequest, { params }: Props) => {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({});
};
