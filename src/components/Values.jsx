import React from 'react'
import { VALUES_CARDS_LIST } from '../utils/helper'
import CustomHeading from '../common/CustomHeading'
import LinesImg from '../assets/images/png/lines-img-2.png'
const Values = () => {
    return (
        <div className='relative'>
            <div className="w-full mx-auto max-w-[1140px] max-md:px-4 max-md:pt-4">
                <span className='flex justify-center items-center relative'>
                    <CustomHeading title="Values" className="xl:mb-[64px] lg:mb-12 md:mb-8 sm:mb-6 mb-4 text-white text-center" />
                    <img className='max-xl:max-w-80 max-lg:max-w-64 max-md:max-w-56 max-sm:max-w-48 absolute xl:-top-7 md:-top-5 sm:-top-6 -top-3' src={LinesImg} alt="Lines-Img-Two" />
                </span>
                <div className="flex flex-wrap gap-4 w-full justify-center">
                    {VALUES_CARDS_LIST.map((obj, index) => (
                        <div className='lg:max-w-[369px] md:max-w-[350px] max-w-md w-full group relative' key={index}>
                            <div className='xl:size-[74px] bg-white shadow-custom-two rounded-full lg:size-16 size-14 group-hover:block hidden transition-all ease-linear duration-300 absolute -z-50 xl:-top-5 lg:-top-5 top-0 xl:-right-6 lg:-right-5 right-0'></div>
                            <div className="lg:min-h-[276px] sm:min-h-[229px] lg:py-5 py-3 lg:px-5 md:px-4 px-3 border border-transparent border-white relative rounded-xl border-opacity-[10%] transition-all ease-linear duration-300 hover:shadow-custom-one hover:backdrop-blur-16 hover:bg-white hover:bg-opacity-10 text-white">
                                <div className='z-50 relative'>
                                    <span>{obj.image}</span>
                                    <h4 className='font-space font-bold lg:text-xl lg:mt-[10px] mt-2 text-base lg:mb-[10px] mb-2 !leading-[127%]'>{obj.title}</h4>
                                    <p className='font-space lg:text-base text-sm max-w-[329px] !leading-[150%]'>{obj.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Values