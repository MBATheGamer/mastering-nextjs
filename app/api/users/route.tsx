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
