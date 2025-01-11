import React from 'react'
import LogoImg from '../assets/images/png/footer-logo-img.png'
import { FOOTER_MEDIA_ICON_LIST } from '../utils/helper'

const Footer = () => {
    return (
        <>
            <div className="w-full mx-auto max-w-[1140px] xl:pt-[82px] md:pt-16 pt-12">
                <div className="flex flex-col justify-center items-center">
                    <a className='mx-auto xl:mb-[69px] lg:mb-12 md:mb-9 mb-7' href="/"><img className='lg:max-w-[255px] md:max-w-44 sm:max-w-40 max-w-36 w-full' src={LogoImg} alt="footer-logo" /></a>
                    <div className='flex lg:gap-6 sm:gap-5 gap-4 mx-auto lg:mb-4 mb-3'>
                        {FOOTER_MEDIA_ICON_LIST.map((obj, index) => (
                            <a className='bg-white size-[35px] hover:scale-[1.1] transition-all ease-linear duration-300 flex justify-center items-center p-2 rounded-full' key={index} href={obj.link} target="_blank" rel="noopener noreferrer">
                                {obj.image}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
            <div className='lg:pt-4 pt-3 lg:pb-[18px] pb-3'>
                <p className='font-space text-center lg:text-base text-sm text-white opacity-[70%] !leading-[180%]'>© Karmic labs {new Date().getFullYear()}</p>
            </div>
        </>
    )
}

export default Footer