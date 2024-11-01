import ProductItem from "@/components/product-item/ProductItem";
import { allProducts } from "@/services/api/AllApi";

export default async function Home() {
  let products = [];

  try {
    const response = await allProducts();
    products = response?.data?.products || [];
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div className="container mx-auto px-4 py-12 mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-8">
        {products?.length > 0 && products?.map((productInfo) => (
          <ProductItem productInfo={productInfo} key={productInfo?.id} />
        ))}
      </div>
    </div>
  );
}
