import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ id, image, name, new_price, old_price }) => {
  if (!id || !image || !name) {
    console.warn("Missing product data in Items.jsx:", { id, image, name, new_price, old_price });
    return null;
  }

  return (
    <div className='item w-[350px] transition-transform duration-500 hover:scale-105'>
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt={name} />
      </Link>
      <p className='m-[6px 0px]'>{name}</p>
      <div className='items-prices flex gap-[20px]'>
        <div className="new-price text-[#374151] text-[18px] font-4xl">
          ${new_price}
        </div>
        <div className="old-price text-[#8c8c8c] text-[18px] font-3xl line-through transition duration-[600ms] hover:scale-[1.2]">
          ${old_price}
        </div>
      </div>
    </div>
  );
};

export default Items;