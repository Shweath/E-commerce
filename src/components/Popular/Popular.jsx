import React from 'react'
import Items from "../items/Items"
import data_product from '../assets/data'

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-[10px] h-[90vh]'>
      <h1 className='text-#171717 text-[50px] font-6xl '>Popular in Women</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="popular-item mt-[50px] flex gap-[30px]">
        {data_product.map((items,i)=>{
            return<Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
