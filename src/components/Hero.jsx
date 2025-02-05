import React from 'react'
import Header from '../common/Header'
import Description from '../common/Description'
import CardsImg from './../assets/images/png/hero-cards-img.png'
import CustomButton from '../common/CustomButton'
import { DownArrowIcon } from '../utils/icons'
import WhiteShadow from '../assets/images/png/white-shadow.png'
import LinesImgThree from '../assets/images/png/lines-img-3.png'
import LinesImgFour from '../assets/images/png/lines-img-4.png'

const Hero = () => {
    return (
        <div className='relative'>
            <img className='absolute left-0 pointer-events-none top-0 max-lg:max-w-32' src={WhiteShadow} alt="white-shadow" />
            <Header />
            <div className='bg-hero-bg lg:bg-cover bg-center relative z-10 min-h-[726px] w-full bg-no-repeat xl:pt-[124px] lg:pt-20 md:pt-16 pt-14 lg:pb-4'>
                <div className="w-full mx-auto max-w-[1120px] max-xl:px-4">
                    <div className="flex flex-wrap w-full lg:mb-0">
                        <div className="lg:w-7/12 w-full flex flex-col justify-center xl:items-start items-center">
                            <div className='lg:text-start text-center'>
                                <h1 className='xl:!text-[64px] lg:text-4xl text-3xl xl:max-w-[570px] lg:max-w-lg max-w-xl max-lg:mx-auto font-light lg:mb-[13px] mb-2 !leading-[108%] text-white uppercase'>We are believers decentralization and <span className='relative'>Web3.<img className='absolute xl:-top-3 lg:-top-2 -top-1.5 xl:left-6 lg:left-3 left-2 max-xl:max-w-24 max-lg:max-w-20' src={LinesImgThree} alt="top-line-img" /><img className='absolute xl:-bottom-2 -bottom-1 right-2 max-xl:max-w-24 max-lg:max-w-20' src={LinesImgFour} alt="bottom-line-img" /></span>  </h1>
                                <Description className="lg:mb-10 md:mb-7 mb-5 !leading-[180%] xl:max-w-[570px] lg:max-w-lg max-lg:mx-auto" title="Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac." />
                                <div className="flex xl:gap-8 lg:gap-7 gap-5 items-center max-lg:justify-center text-start">
                                    <CustomButton title="Get Started" className="lg:!px-6 px-4 flex justify-center items-center lg:gap-[10px] border-transparent border transition-all ease-linear custom-button duration-300 gap-2 hover:!bg-transparent hover:!text-white hover:border-[1px] hover:border-white !leading-[120%]" customClass="!block " />
                                    <CustomButton title="Read More" className="!bg-transparent !text-white border-[1px] border-white hover:!bg-white hover:!text-black !leading-[120%] transition-all ease-linear duration-300" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-5/12 w-full items-end lg:justify-end justify-center flex max-lg:justify-center lg:mt-0 md:mt-10 mt-7">
                            <img className='xl:max-w-[428px] xl:min-h-[446px] lg:max-w-80 sm:max-w-72 max-w-64 w-full' src={CardsImg} alt="cards-img" /></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <a className='bounce2' href="#next">
                            <DownArrowIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero