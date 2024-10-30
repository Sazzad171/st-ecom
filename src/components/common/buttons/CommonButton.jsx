import React from 'react';
import { TiShoppingCart } from "react-icons/ti";

const CommonButton = ({
  icon,
  text=''
}) => {
  return (
    <button
      className="w-full px-4 py-2 text-white bg-white backdrop-blur-[10px] bg-opacity-30 border border-white rounded-md"
    >
      <span className="flex items-center justify-center space-x-2">
        <TiShoppingCart className="h-6 w-6" />
        <span className='font-medium text-sm'>{text}</span>
      </span>
    </button>
  );
};

export default CommonButton;
