"use server";

import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";

// Get latest products
export async function getLatestProducts() {
	const prisma = new PrismaClient();
	const data = await prisma.product.findMany({
		orderBy: { createdAt: "desc" },
	});
	return convertToPlainObject(data);
}
