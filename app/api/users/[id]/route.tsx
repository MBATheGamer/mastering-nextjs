import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: { id: number };
};

export const GET = (request: NextRequest, { params }: Props) => {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: params.id, name: "Mohamed" });
};

export const PUT = async (request: NextRequest, { params }: Props) => {
  const body = await request.json();

  if (!body["name"])
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: params.id, name: body["name"] });
};
