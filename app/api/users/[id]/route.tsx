import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: { id: number };
};

export const GET = (request: NextRequest, { params }: Props) => {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: params.id, name: "Mohamed" });
};
