import React from 'react'
import clsx from 'clsx'
import logo from '../assets/logo_big.png'
import insta from '../assets/instagram_icon.png'
import pintester from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const li_css = clsx('cursor-pointer')

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px]'>
      <div className="logo flex items-center gap-[30px]">
        <img src={logo} alt="Logo" />
        <p className='text-[#383838] text-[46px] font-[700]'>SHOPPER</p>
      </div>

      <ul className='flex list-none gap-[50px] text-[#252525] text-[20px]'>
        <li className={li_css}>Company</li>
        <li className={li_css}>Products</li>
        <li className={li_css}>Offices</li>
        <li className={li_css}>About</li>
        <li className={li_css}>Contact</li>
      </ul>

      <div className='flex gap-[20px]'>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={insta} alt="Instagram" />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={pintester} alt="Pinterest" />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={whatsapp} alt="WhatsApp" />
        </div>
      </div>

      <div className="copyright flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[30px]">
        <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]' />
        <p>Copyright © 2025 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
