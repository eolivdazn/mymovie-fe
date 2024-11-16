import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);

  return NextResponse.json(
    { message: "Method not allowed" },
    {
      status: 200,
    }
  );
}