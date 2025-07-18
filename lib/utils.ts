import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Convert prisma object to regular JS object
export function convertToPlainObject<T>(value: T): T {
	const parsed = JSON.parse(JSON.stringify(value), (_, v) => {
		// Check if the value looks like a decimal number string
		if (typeof v === "string" && /^\d+\.\d+$/.test(v)) {
			return parseFloat(v);
		}
		return v;
	});
	return parsed;
}
