import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b py-4">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} Logo`}
            width={48}
            height={48}
						priority={true}
          />
					<span className="hidden lg:block font-bold text-2xl ml-3">
						{APP_NAME}
					</span>
        </div>
				<div className="space-x-2">
					<Button asChild variant='ghost'>
						<Link href="/cart">
							<ShoppingCart className="w-4 h-4" /> Cart
						</Link>
					</Button>
					<Button asChild variant='ghost'>
						<Link href="/sign-in">
							<UserIcon className="w-4 h-4" />Sign In
						</Link>
					</Button>
				</div>
      </div>
    </header>
  );
};

export default Header;
