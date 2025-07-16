import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Menu from "./menu";

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
				<Menu />
			</div>
		</header>
	);
};

export default Header;
