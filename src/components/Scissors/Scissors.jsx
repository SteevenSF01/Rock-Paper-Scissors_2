import React from 'react'
import SCISSORS from './../../images/icon-scissors.svg'

export default function Scissors(props) {
  return (
    <button 
    onClick={()=> {props.setNavigation('scissors')}}
    className='bg-white w-[110px] h-[110px] animate-wiggle animate-infinite  flex justify-center items-center mt-5 rounded-full md:w-[150px] md:mt-0 md:h-[150px]  border-[#EDA620ff] xl:w-[200px] xl:h-[200px] border-[10px] [box-shadow:0px_5px_5px_0px_rgba(0,0,0,0.75)]'>
        <img src={SCISSORS} alt="" className='w-[45%] ' />
    </button>
  )
}
