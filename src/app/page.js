import ProductItem from "@/components/product-item/ProductItem";

export default function Home() {
  const products = [
    {
      id: 1,
      image: "/images/products/t-shirt-1.jpg",
      name: "Fabrilife Mens Premium Designer Edition T Shirt",
      price: 2300,
      originalPrice: 2500,
      isDiscounted: true,
      discountLabel: "200",
    },
    {
      id: 2,
      image: "/images/products/t-shirt-2.jpg",
      name: "Fabrilife Mens Premium Designer Edition T Shirt",
      price: 2500,
    },
    {
      id: 3,
      image: "/images/products/t-shirt-3.jpg",
      name: "Fabrilife Mens Premium Designer Edition T Shirt",
      price: 2200,
      originalPrice: 2500,
      isDiscounted: true,
      discountLabel: "200",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-4">
        {products.map((productInfo) => (
          <ProductItem productInfo={productInfo} />
        ))}
      </div>
    </div>
  );
}
