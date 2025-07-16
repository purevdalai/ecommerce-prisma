"use client";

import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Image
				src={"/images/logo.svg"}
				alt={`${APP_NAME} logo`}
				width={48}
				height={48}
			/>
			<div className="p-6 rounded-lg shadow-md text-center w-1/3">
				<h1 className="text-3xl font-bold mb-4">Not Found</h1>
				<p className="text-destructive mb-4">Could not find requested page.</p>
				<Button
					variant="outline"
					className="mt-4 ml-2"
					onClick={() => router.push("/")}
				>
					Back to Home
				</Button>
			</div>
		</div>
	);
};

export default NotFoundPage;
