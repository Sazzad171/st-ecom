'use client'

import Image from 'next/image';
import CommonButton from '../common/buttons/CommonButton';
import { TfiShoppingCart } from "react-icons/tfi";
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import useToastify from '@/hooks/useToastify';
import useCartStore from '@/services/store/cart/useCartStore';
import { useEffect, useState } from 'react';
import CartButton from '../common/buttons/CartButton';
import { discountAmount, finalPrice } from '@/utils/Helpers';

const ProductItem = ({productInfo}) => {
  const [alreadyAddedProduct, setAlreadyAddedProduct] = useState(false);
  const { notify } = useToastify();
  const {productItems, setProductItems} = useCartStore((state) => state);

  const CartIcon = <TfiShoppingCart className="h-6 w-6" />
  const EyeIcon = <IoEyeOutline className="h-6 w-6" />

  // check product is already in cart
  useEffect(() => {
    if (productItems.some((item) => item.id === productInfo?.id)) {
      setAlreadyAddedProduct(true);
    }
    else {
      setAlreadyAddedProduct(false);
    }
  }, [productItems]);

  // add wishlist
  const addToWishlist = () => {
    notify("Product added to wishlist!", "success");
  }

  // add to cart
  const addToCart = (prodId) => {
    setProductItems(prodId);
    notify("Product added to cart!", "success");
  }

  return (
    <div className="relative p-[2px] bg-white hover:shadow-[0px_4px_12px_0px_#00000026] rounded-lg transition-all duration-500 group">
      <div className="absolute top-3 left-0 z-[1]">
        <div className="bg-orange-500 text-white font-semibold text-xs px-3 py-1 rounded-tl-[4px] rounded-tr-xl rounded-br-[4px]">
          - ৳ {discountAmount(productInfo?.price, productInfo?.discountPercentage)}
        </div>
        <div className="border-b-[16px] border-r-[16px] border-orange-500 border-transparent border-r-transparent w-0 h-0" />
      </div>

      <div className='relative bg-gray-300 rounded-lg'>
        <Image
          src={productInfo?.thumbnail}
          width={420}
          height={420}
          alt={productInfo?.title}
          className='rounded-md hover:cursor-pointer object-contain'
        />
        <div
          className='absolute top-4 right-4 z-10 invisible group-hover:visible transition-all duration-50'
          onClick={addToWishlist}
        >
          <GoHeart className="h-6 w-6 text-white" />
        </div>
        <div className='absolute bottom-12 group-hover:bottom-16 left-4 right-4 invisible group-hover:visible transition-all duration-300'>
          {
            !alreadyAddedProduct ?
              <CommonButton icon={CartIcon} text={"Add to Cart"} handleClick={() => addToCart(productInfo?.id)} />
              : <CartButton prodId={productInfo?.id} />
          }
        </div>
        <div className='absolute bottom-0 group-hover:bottom-3 left-4 right-4 invisible group-hover:visible transition-all duration-300'>
          <CommonButton icon={EyeIcon} text={"Quick View"} />
        </div>
      </div>

      <div className='px-2 py-3'>
        <h2 className="text-[#5A6573] text-sm">{productInfo?.category}</h2>
        <h3 className="text-base font-semibold mt-1 mb-2 hover:cursor-pointer">{productInfo?.title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-[20px] font-medium text-[#1882FF]">৳ {finalPrice(productInfo?.price, productInfo?.discountPercentage)}</span>
          {productInfo?.price && (
            <span className="text-[#77818C] line-through text-sm">৳ {productInfo?.price}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem;