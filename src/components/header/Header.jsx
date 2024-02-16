import React from 'react'
import Logo from './../../images/logo.svg'

export default function Header(props) {
  // console.log(props);
  return (
    <div className='border-2 mx-auto  border-[#606e85] mt-[40px] rounded-xl md:w-[30rem] md:mt-[20px] w-[20rem] h-[7rem] flex justify-between items-center p-4 '>
        <img src={Logo} alt="" className='w-[33%] h-[80%] md:w-[25%] ' />
        <div className='w-[30%] h-[100%] md:w-[23%] bg-white rounded-xl leading-6 flex flex-col justify-center items-center '>
            <h1 className='text-[12px] text-[#2a46c0] font-semibold tracking-widest '>SCORE</h1>
            <p className='text-[36px] font-semibold pb-2 text-[#3b4363] shadow-2xl '>{props.score}</p>
        </div>
    </div>
  )
}
