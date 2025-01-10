import React from 'react'
import { ArrowIcon } from '../utils/icons'

const CustomButton = (props) => {
  return (
 <button className={`bg-white text-black lg:py-3 py-2 xl:px-8 lg:px-7 px-5 rounded-[82px] font-bold xl:text-base text-sm leading-[20px] ${props.className}`}>{props.title} <span className={`${props.customClass} hidden`}><ArrowIcon/></span></button>
  )
}

export default CustomButton