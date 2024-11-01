import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import useCartStore from '@/services/store/cart/useCartStore';
import useToastify from '@/hooks/useToastify';

const CartButton = ({
  prodId
}) => {
  const [localQuantity, setLocalQuantity] = useState(1);
  const {productItems, removeItem, setQuantity} = useCartStore((state) => state);
  const { notify } = useToastify();

  useEffect(() => {
    productItems.map((item) => {
      if (item.id == prodId) {
        setLocalQuantity(item.quantity);
      }
    });
  }, [productItems]);

  // delete from cart
  const deleteItem = () => {
    removeItem(prodId);
    notify("Product deleted from cart!", "error");
  }

  // add more quantity
  const addQuantity = () => {
    setQuantity(prodId, localQuantity);
  }
  
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 bg-[#03A629] text-white text-sm font-medium rounded-md">
      <button onClick={deleteItem}>
        <RiDeleteBin6Line className="h-5 w-5" />
      </button>
      <span>{localQuantity} Added in Cart</span>
      <button onClick={addQuantity}>
        <FaPlus className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartButton;
