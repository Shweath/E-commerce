import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers w-[65%] h-[60vh] flex m-auto p-[0px 140px] mb-[150px]  bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]'>
      <div className="left flex-1 flex flex-col justify-center ms-[50px]">
        <h1 className='text-[#171717] text-[80px] font-[600]  '>Exclusive</h1>
        <h1 className='text-[#171717] text-[80px] font-[600]  '>Offers For You</h1>
        <p className='text-[#171717] text-[22px] font-[600]  '>Only On Best Sellers Product </p>
        <button className='w-[282px] h-[78px] rounded-[35px]  bg-[#ff4141] border-0 text-[white] text-[22px] font-[500] mt-[30px] hover:bg-[#e03838]'>Click Now</button>
      </div>
      <div className="right flex-1 flex items-center justify-end pt-[50px] ">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer
