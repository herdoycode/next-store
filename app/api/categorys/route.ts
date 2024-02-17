import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

// Create new category
export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const category = await prisma.category.create({
    data: { name: body.name },
  });
  return NextResponse.json(category, { status: 201 });
};

// Get all category
export const GET = async (request: NextRequest) => {
  const category = await prisma.category.findMany();
  return NextResponse.json(category);
};
