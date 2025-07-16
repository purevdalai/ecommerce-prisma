import { Button } from "@/components/ui/button";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: `%s | ProStore`,
		default: APP_NAME,
	},
	description: APP_DESCRIPTION,
	metadataBase: new URL(SERVER_URL),
};

export default function HomePage() {
	return (
		<div>
			<h1>Home page</h1>

			<Button>Click me</Button>
		</div>
	);
}
