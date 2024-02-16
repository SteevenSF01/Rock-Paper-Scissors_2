import React from 'react'
import PAPER from './../../images/icon-paper.svg'

export default function Paper(props) {
    // console.log(props);
  return (
    <button 
    onClick={()=> {props.setNavigation('paper')}}
    className='bg-white w-[110px] h-[110px] flex justify-center items-center mt-5 md:w-[150px] md:mt-0 md:h-[150px] xl:w-[200px] xl:h-[200px] rounded-full  border-[#4665F3ff] border-[10px] [box-shadow:0px_5px_5px_0px_rgba(0,0,0,0.75)]'>
        <img src={PAPER} alt="" className='w-[45%] ' />
    </button>
  )
}
