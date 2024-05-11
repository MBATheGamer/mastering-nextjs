import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export const GET = (_request: NextRequest) => {
  return NextResponse.json([
    {
      id: 1,
      name: "Mohamed",
    },
    {
      id: 2,
      name: "Ahmed",
    },
  ]);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json(
    {
      id: 3,
      name: body["name"],
    },
    { status: 201 }
  );
};
