import Image from 'next/image';
import CommonButton from '../common/buttons/CommonButton';

const ProductItem = ({productInfo}) => {
  return (
    <div key={productInfo.id} className="relative p-[2px] bg-white hover:shadow-[0px_4px_12px_0px_#00000026] rounded-lg transition-all duration-500 group">
      <div className="absolute top-2 left-2">
        <div className="bg-orange-500 text-white font-semibold px-2 py-1 rounded-tl-md rounded-tr-md">
          -{productInfo.discountLabel}
        </div>
        <div className="border-b-[16px] border-r-[16px] border-orange-500 border-transparent border-r-transparent w-0 h-0" />
      </div>
      <div className='relative'>
        <Image
          src={productInfo.image}
          width={420}
          height={420}
          objectFit="contain"
          alt={productInfo.name}
          className='rounded-md hover:cursor-pointer'
        />
        <div className='absolute bottom-12 group-hover:bottom-16 left-4 right-4 invisible group-hover:visible transition-all duration-300'>
          <CommonButton text={"Add to Cart"} />
        </div>
        <div className='absolute bottom-0 group-hover:bottom-3 left-4 right-4 invisible group-hover:visible transition-all duration-300'>
          <CommonButton text={"Quick View"} />
        </div>
      </div>
      <div className='px-2 py-3'>
        <h2 className="text-[#5A6573] text-sm">Fabrilife</h2>
        <h3 className="text-base font-semibold mt-1 mb-2 hover:cursor-pointer">{productInfo.name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-[20px] font-medium text-[#1882FF]">৳ {productInfo.price}</span>
          {productInfo.originalPrice && (
            <span className="text-[#77818C] line-through text-sm">৳ {productInfo.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem;