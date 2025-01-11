import React from 'react'
import CustomHeading from '../common/CustomHeading'
import { PROJECT_CARDS_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'
import lineImg from '../assets/images/png/lines-img.png'

const UpcomingProjects = () => {
    return (

        <div id='next' className="w-full mx-auto max-w-[1150px] xl:mt-[86px] lg:mt-20 md:mt-16 mt-12 xl:mb-[136px] lg:mb-24 md:mb-16 sm:mb-14 mb-12">
            <span className='relative justify-center items-center flex'>
            <CustomHeading title="Upcoming Projects" className="xl:mb-12 relative lg:mb-10 md:mb-8 mb-7 text-white text-center" />
            <img className='absolute lg:-top-7 md:-top-6 -top-5 mx-auto max-xl:max-w-96 max-lg:max-w-80 max-md:max-w-64' src={lineImg} alt="line-img" />
            </span>
            <div className="flex flex-wrap lg:mb-12 md:mb-10 sm:mb-7 mb-4 xl:gap-[29px] lg:gap-6 gap-4 justify-center">
                {PROJECT_CARDS_LIST.map((obj, index) => (
                    <div className="max-lg:justify-center max-lg:flex" key={index}>
                        <div className='max-w-[263px] xl:min-w-[263px] px-4 py-4 border border-white rounded-xl border-opacity-[10%] shadow-custom-one backdrop-blur-one bg-light-black text-white'>
                            <img className='mb-[15px] max-w-[231px] w-full' src={obj.image} alt="card-img" />
                            <div className='w-full flex justify-between'>
                                <h4 className='font-medium lg:text-xl text-base'>{obj.title}</h4>
                                <span className='font-medium lg:text-base text-sm'>{obj.countDown}</span>
                            </div>
                            <p className='font-light lg:text-base text-sm font-space'>{obj.nft}</p>
                        </div>
                    </div>
                ))}
            </div>
            <CustomButton title="View All" className="mx-auto hover:!bg-white !leading-[120%] hover:!text-black transition-all ease-linear duration-300 flex justify-center !bg-transparent !text-white border-white border" />
        </div>

    )
}

export default UpcomingProjects