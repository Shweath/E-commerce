import React from 'react'
import new_collection from '../assets/new_collections'
import Items from '../items/Items'

const New_collection = () => {
  return (
    <div className='popular flex flex-col items-center gap-[10px] h-[90vh]'>
      <h1 className='text-#171717 text-[50px] font-6xl '>New Collections</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] mt-[15px] gap-[13px] ">
        {new_collection.map((items,i)=>{
            return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
        })}
      </div>
    </div>
  )
}

export default New_collection
