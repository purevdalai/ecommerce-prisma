import { z } from "zod";
import { formatNumber } from "./utils";

const currency = z
	.string()
	.refine((value) => /^\d+(\.\d{2})?$/.test(formatNumber(Number(value))), {
		message: "Price must have exactly 2 decimal places.",
	});

// Schema for product
export const insertProductSchema = z.object({
	name: z.string().min(3, "Name must be at least 3 characters."),
	slug: z.string().min(3, "Slug must be at least 3 characters."),
	category: z.string().min(3, "Category must be at least 3 characters."),
	brand: z.string().min(3, "Brand must be at least 3 characters."),
	description: z.string().min(3, "Description must be at least 3 characters."),
	stock: z.coerce.number(),
	images: z.array(z.string()).min(1, "Product must have at least 1 image."),
	isFeatured: z.boolean().default(false),
	price: currency,
	banner: z.string().nullable(),
});

// Schema for signing users in
export const signInSchema = z.object({
	email: z.string().email("Invalid email address."),
	password: z.string().min(6, "Password must be at least 6 characters."),
});
