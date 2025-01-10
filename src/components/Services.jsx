import React from 'react'
import { SERVICES_CARDS_LIST } from '../utils/helper'
import CustomHeading from '../common/CustomHeading'
import CircleImg from '../assets/images/png/circle-ellipse.png'
import whiteImgTwo from '../assets/images/png/white-shadow-two.png'
import LinesImg from '../assets/images/png/lines-img-2.png'
import WhiteShadowThree from '../assets/images/png/white-shadow-three.png'

const Services = () => {
    return (
        <div className='relative xl:mt-[136px] lg:mt-24 md:mt-16 sm:mt-14 mt-12'>
            <img className='absolute right-0 md:-top-96 -top-40 pointer-events-none max-sm:max-w-[60%]' src={whiteImgTwo} alt="white-shadow" />
            <img className='absolute pointer-events-none left-0 lg:-bottom-[57%] -bottom-80 max-sm:-bottom-56 max-sm:max-w-[70%]' src={WhiteShadowThree} alt="white-shadow-img" />
            <div className="w-full mx-auto max-w-[1145px]">
                <span className='flex justify-center items-center relative'>
                    <CustomHeading title="Services" className="xl:mb-[70px] lg:mb-12 md:mb-8 sm:mb-6 mb-1 text-white text-center" />
                    <img className='max-xl:max-w-80 max-lg:max-w-64 max-md:max-w-56 max-sm:max-w-48 absolute xl:-top-7 md:-top-5 sm:-top-6 -top-3' src={LinesImg} alt="Lines-Img-Two" />
                </span>
                <div className="flex flex-wrap w-full max-lg:justify-center">
                    {SERVICES_CARDS_LIST.map((obj, index) => (
                        <div className="lg:w-4/12 md:w-6/12 w-full px-3 my-3 flex justify-center" key={index}>
                            <div className='max-w-[369px] w-full group relative'>
                                <img className='group-hover:block hidden transition-all ease-linear duration-300 xl:size-[74px] lg:size-16 size-14 absolute -z-50 xl:-top-5 lg:-top-5 -top-4 xl:-right-6 lg:-right-5 -right-4' src={CircleImg} alt="circle-img" />
                                <div className="lg:min-h-[276px] sm:min-h-[229px] lg:py-5 py-3 lg:px-5 md:px-4 px-3 border border-transparent hover:border-white relative rounded-xl hover:border-opacity-[10%] transition-all ease-linear duration-300 hover:shadow-custom-one hover:backdrop-blur-sm hover:bg-white hover:bg-opacity-10 text-white">
                                    <div className='z-50 relative'>
                                        <span>{obj.image}</span>
                                        <h4 className='font-space font-bold lg:text-xl lg:mt-5 mt-4 text-base lg:mb-1.5 mb-1'>{obj.title}</h4>
                                        <p className='font-space lg:text-base text-sm max-w-[3329px]'>{obj.description}</p>
                                        {Array.isArray(obj.content) && obj.content.length > 0
                                            ? obj.content.map((item, i) => (
                                                <ul key={i}>
                                                    <li className="list-disc font-space lg:text-base text-sm text-white ml-7">{item}</li>
                                                </ul>
                                            ))
                                            : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services