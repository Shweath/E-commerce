import clsx from 'clsx'
import React from 'react'

const input = clsx("border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] h-[60px] w-[100%] pl-[20px] ")
const LoginSignup = () => {
  return (
    <div className='container w-[100%] h-[110vh] bg-[#fce3fe] mx-auto pt-[100px]'>
      <div className=" w-[540px] h-[580px] mb-[100px] bg-[white] m-auto mt-[-60px] p-[40px_60px]  ">
        <h1 className=' mx-[20px] mt-[0px] mb-[0px]  text-[30px] font-[600] '>Sign Up</h1>
        <div className="fields flex flex-col gap-[30px] mt-[30px]   ">
          <input type="text" className={input} placeholder='Your Name' />
          <input type="email" className={input} placeholder='Email address' />
          <input type="password" className={input} placeholder='Password' />
        </div>
        <button className='w-[100%] h-[60px] text-white bg-[#ff4141] mt-[30px] border-none text-[20px] font-[500] cursor-pointer '>Continue</button>
        <p className="login mt-[20px] text-[#5c5c5c] text-[15px] font-[500]  ">
          Already have an account?
          <span className='text-[#ff4141] ms-[5px] cursor-pointer font-[600] '>Login here</span>
        </p>
        <div className="agree flex items-center mt-[20px] gap-[15px] text-[#5c5c5c] text-[14px] font-[500]  ">
          <input type="checkbox" name="" id="" />
          <p >By continuing, i aggree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
