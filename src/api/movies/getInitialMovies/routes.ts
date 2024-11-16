import { NextRequest, NextResponse } from "next/server";
import React from "react";
import prisma from "../../../../prisma/db";
// import { ticketSchema } from "@/validationsSchemas/tickets";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest) {

  const ticket = await prisma.movie.findMany();
  return NextResponse.json((await ticket),{status: 200})
}