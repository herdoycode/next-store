import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Create new category
export const POST = async (request: NextRequest) => {
  const { name, description, categoryId, price, image } = await request.json();
  const product = await prisma.product.create({
    data: { name, categoryId, description, price, image },
  });
  return NextResponse.json(product, { status: 201 });
};

// Get all products
export const GET = async (request: NextRequest) => {
  const products = await prisma.product.findMany();
  return NextResponse.json(products, { status: 201 });
};
