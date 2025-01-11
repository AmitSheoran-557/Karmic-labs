import React from 'react'
import CustomHeading from '../common/CustomHeading'
import LinesImg from '../assets/images/png/black-lines-img.png'
import Description from '../common/Description'
import { PROJECT_SECTION_IMAGE_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'

const projects = () => {
    return (
        <div className='bg-cover bg-white-bg bg-center max-xl:bg-white'>
            <div className='relative max-w-[1440px] mx-auto xl:pb-[121px] lg:pb-20 md:pb-16 pb-12 bg-no-repeat xl:pt-24 lg:pt-20 md:pt-16 pt-12'>
                <div className="w-full mx-auto max-xl:px-4 max-w-[1150px]">
                    <span className='flex justify-center items-center relative'>
                        <CustomHeading title="Projects" className="xl:mb-6 lg:mb-5 mb-4 text-black text-center" />
                        <img className='max-xl:max-w-80 max-lg:max-w-64 max-md:max-w-56 max-sm:max-w-48 absolute xl:-top-7 md:-top-5 sm:-top-6 -top-3' src={LinesImg} alt="Lines-Img-Two" />
                    </span>
                    <Description className="max-w-[527px] lg:mb-[53px] md:mb-10 sm:mb-8 mb-6 md:mb- text-center mx-auto !text-black" title="Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus." />
                    <div className="flex flex-wrap w-full mx-auto lg:gap-x-4 gap-x-3 lg:gap-y-6 gap-y-4 justify-center items-center xl:pb-14 lg:pb-12 md:pb-7 pb-4">
                        {PROJECT_SECTION_IMAGE_LIST.map((obj, index) => (
                            <div className="flex justify-center items-center" key={index}>
                                <div className='overflow-hidden group xl:hover:scale-[1.25] lg:hover:scale-[1.1] hover:scale-[1.07] hover:z-50 lg:hover:-translate-y-2 relative group transition-all ease-linear duration-300'>
                                    <div className='rounded-lg overflow-hidden relative'>
                                        <img className='xl:max-w-[273px] md:max-w-xs max-w-lg rounded-lg w-full' src={obj.image} alt="img" />
                                        <p className='bg-light-brown lg:text-xl rounded-b-lg text-base -bottom-10 group-hover:bottom-0 overflow-hidden transition-all ease-linear duration-300 text-white font-bold text-center absolute w-full left-0 right-0'>Nubbies</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <CustomButton title="View All" className="mx-auto hover:!bg-sky-blue !leading-[120%] hover:!text-white transition-all ease-linear duration-300 flex justify-center !bg-transparent !text-black border-black border hover:border-transparent" />
                </div>
            </div>
        </div>
    )
}

export default projects