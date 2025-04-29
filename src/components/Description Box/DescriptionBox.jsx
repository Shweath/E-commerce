import clsx from 'clsx'
import React from 'react'
const dec = clsx(
    "flex items-center justify-center",
    "text-[16px] font-semibold",
    "w-[171px] h-[70px]",
    "border border-[#d0d0d0]"
  );
  const DescriptionBox = () => {
  return (
    <div className='mx-[120px] my-[170px] '>
       <div className="navigator flex ">
        <div className={dec}  >
            Description
        </div>
        <div className={clsx(dec, "bg-[#fbfbfb] text-[#555]")} >
            Reviews (122)
        </div>
       </div>
       <div className="box_description flex flex-col gap-[25px] border border-[#d0d0d0] p-[48px] pb-[70px] ">
        <p>Shop the latest trends with confidence and style at Shopper. We offer high-quality products, fast shipping, and secure payments to ensure a seamless shopping experience. Explore our collection today and find the perfect addition to your wardrobe! </p>
        <p>
        Don’t miss out on exclusive deals and discounts available for a limited time. Whether you're looking for casual wear, formal outfits, or accessories, we’ve got something for everyone. Sign up for our newsletter and enjoy extra savings on your first order! 
        </p>
       </div>
    </div>
  )
}

export default DescriptionBox
