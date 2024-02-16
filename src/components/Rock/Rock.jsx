import React from 'react'
import ROCK from './../../images/icon-rock.svg'

export default function Rock(props) {
  return (
    <button 
    onClick={()=> {props.setNavigation('rock')}}
    className='bg-white w-[110px] h-[110px] mt-5 animate-wiggle animate-infinite flex justify-center items-center md:w-[150px] md:mt-0 md:h-[150px] xl:w-[200px] xl:h-[200px]  rounded-full  border-[#DE3B56ff] border-[10px] [box-shadow:0px_5px_5px_0px_rgba(0,0,0,0.75)]'>
        <img src={ROCK} alt="" className='w-[45%] ' />
    </button>
  )
}
