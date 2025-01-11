import React from 'react'
import CustomHeading from '../common/CustomHeading'
import whiteImgTwo from '../assets/images/png/white-shadow-two.png'
import LinesImg from '../assets/images/png/lines-img-2.png'
import Description from '../common/Description'
import { KARMIC_IMAGE_LIST } from '../utils/helper'

const Karmic = () => {
    return (
        <div className='relative lg:mt-20 md:mt-16 sm:mt-14 mt-12 xl:pb-[147px] lg:pb-24 md:pb-16 sm:pb-14 pb-12 max-md:px-4'>
            <img className='absolute right-0 md:-top-96 -top-40 pointer-events-none max-sm:max-w-[60%]' src={whiteImgTwo} alt="white-shadow" />
            <div className="w-full mx-auto max-w-[1140px]">
                <span className='flex justify-center items-center relative'>
                    <CustomHeading title="Who is karmic?" className="xl:mb-[18px] lg:mb-4 mb-3 text-white text-center" />
                    <img className='max-xl:max-w-80 max-lg:max-w-64 max-md:max-w-56 max-sm:max-w-48 absolute xl:-top-7 md:-top-5 sm:-top-6 -top-3' src={LinesImg} alt="Lines-Img-Two" />
                </span>
                <Description title="We are builders, innovaters, and believers." className="text-center !leading-[180%] mx-auto" />
                <Description title="We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3." className="text-center !leading-[180%] xl:mb-8 lg:mb-7 mb-5 mx-auto" />
                <div className="flex flex-wrap w-full gap-4 max-xl:justify-center">
                    {KARMIC_IMAGE_LIST.map((obj, index) => (
                        <div className='group relative' key={index}>
                            <img className='lg:max-w-[369px] shadow-custom-two md:max-w-[350px] max-w-md w-full' src={obj.image} alt={obj.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Karmic