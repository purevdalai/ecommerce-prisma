import { FC } from "react";
import { cn } from "@/lib/utils";

interface IProductPriceProps {
  value: number;
  className?: string;
}

export const ProductPrice: FC<IProductPriceProps> = ({ value, className }) => {
	const stringValue = value.toFixed(2);
	const [intValue, floatValue] = stringValue.split(".");


	return (
		<p className={cn('text-2xl', className)}>
      <span className="text-xs align-super">$</span>
      <span className="">{intValue}</span>
      <span className="text-xs align-super">.{floatValue}</span>
		</p>
	);
};
