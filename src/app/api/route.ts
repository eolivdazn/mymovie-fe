import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {


  return NextResponse.json({test:"test"}, { status: 201 });
}


//http://localhost:3000/api/