"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useState } from "react";

interface IProductImagesProps {
	images: string[];
}

export const ProductImages: FC<IProductImagesProps> = ({ images }) => {
	const [current, setCurrent] = useState(0);

	return (
		<div className="space-y-4">
			<Image
				src={images[current]}
				alt="Product Image"
				width={1000}
				height={1000}
				className="min-h-[300] object-cover object-center"
			/>
			<div className="flex">
				{images.map((image, index) => (
					<div
						key={image}
						className={cn(
							"border mr-2 cursor-pointer hover:border-orange-600",
							current === index && "border-orange-500",
						)}
						onClick={() => setCurrent(index)}
					>
						<Image src={image} alt="image" width={100} height={100} />
					</div>
				))}
			</div>
		</div>
	);
};
