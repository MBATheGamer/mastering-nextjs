import { NextRequest, NextResponse } from "next/server";

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

  if (!body["name"])
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  return NextResponse.json(
    {
      id: 3,
      name: body["name"],
    },
    { status: 201 }
  );
};
