import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
	return (
		<div className="flex justify-end gap-3">
			<nav className="hidden md:flex w-full max-w-xs gap-1">
				<ModeToggle />
				<Button asChild variant="ghost">
					<Link href="/cart">
						<ShoppingCart className="w-4 h-4" /> Cart
					</Link>
				</Button>
				<Button asChild>
					<Link href="/sign-in">
						<UserIcon className="w-4 h-4" />
						Sign In
					</Link>
				</Button>
			</nav>
			<nav className="md:hidden">
				<Sheet>
					<SheetTrigger className="align-middle">
						<EllipsisVertical />
					</SheetTrigger>
					<SheetContent className="flex flex-col items-start p-4">
						<SheetTitle>Menu</SheetTitle>
						<ModeToggle />

						<Button asChild variant="ghost">
							<Link href="/cart">
								<ShoppingCart className="w-4 h-4" /> Cart
							</Link>
						</Button>
						<Button asChild>
							<Link href="/sign-in">
								<UserIcon className="w-4 h-4" />
								Sign In
							</Link>
						</Button>
						{/* <SheetHeader></SheetHeader>
						<SheetDescription className="flex flex-col items-start"></SheetDescription> */}
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	);
};

export default Menu;
