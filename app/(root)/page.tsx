import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants";

const HomePage = async () => {
	const data = await getLatestProducts();
  
	return (
		<>
			<ProductList
				data={data}
				title="Newest Arrivals"
				limit={Number(LATEST_PRODUCT_LIMIT)}
			/>
		</>
	);
};
export default HomePage;
