'use client'

import useCartStore from "@/services/store/cart/useCartStore";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";

export default function Header() {
  const {productItems} = useCartStore((state) => state);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Image
            src="/images/st-logo.svg"
            width={120}
            height={40}
            alt="logo"
            className="object-contain"
          />
        </div>
        <div className="relative">
          <TiShoppingCart className="h-6 w-6 text-gray-700" />
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
            {productItems?.length ?? 0}
          </span>
        </div>
      </div>
    </header>
  );
}
