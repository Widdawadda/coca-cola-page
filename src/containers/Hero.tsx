import React, { FC } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow } from "swiper";

import cocacola1 from "../assets/images/cocacola1.png";
import cocacola2 from "../assets/images/cocacola2.png";
import cocacola3 from "../assets/images/cocacola3.png";
import cocacola4 from "../assets/images/cocacola4.png";
import cocacola5 from "../assets/images/cocacola5.png";
import cocacola6 from "../assets/images/cocacola6.png";

const Hero: FC = () => {
    return (
        <>
            <div className="lg:flex lg:flex-row flex flex-col gap-[3rem]">
                <div className="lg:ml-[5rem] md:ml-[1.75rem]  flex flex-col gap-[1rem] pl-[2rem] justify-center z-30">
                    <h1 className='font-bold text-[2.5rem]'>Taste the Feeling</h1>
                    <p className="text-[1rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Corrupti adipisci impedit dignissimos laborum, odit eos,<br /> omnis animi deserunt, repellat quos necessitatibus. Beatae <br />illum eligendi veritatis non quis libero ducimus!</p>
                    <a className='bg-circle-red hover:translate-x-2 hover:-translate-y-2 mt-2 transition duration-700 rounded-full w-max px-5 py-2' href="https://www.coca-colacompany.com/company">Learn More</a>
                </div>
                <div>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow]}
                        className="lg:w-[45rem] md:w-[35rem] w-[18.25rem]"
                        loop={true}
                    >

                        <div className="flex justify-end z-50 py-[3.125] w-[25rem]">
                            <div className="lg:flex lg:justify-end lg:gap-[1rem] flex justify-center gap-[2rem] w-[25rem]">
                                <SwiperSlide className='bg-center max-h-full bg-cover flex justify-center bottom-0 w-[11.25rem] h-[18.75rem] lg:h-[31.25rem] lg:max-h-full'>
                                    <img src={cocacola1} className="lg:absolute lg:bottom-0 lg:max-h-full" />
                                </SwiperSlide>
                                <SwiperSlide className='bg-center max-h-full bg-cover flex justify-center bottom-0 w-[11.25rem] h-[18.75rem] lg:h-[31.25rem] lg:max-h-full'>
                                    <img src={cocacola2} className="lg:absolute lg:bottom-0 lg:max-h-full" />
                                </SwiperSlide>
                                <SwiperSlide className='bg-center max-h-full bg-cover flex justify-center bottom-0 w-[11.25rem] h-[18.75rem] lg:h-[31.25rem] lg:max-h-full'>
                                    <img src={cocacola3} className="lg:absolute lg:bottom-0 lg:max-h-full" />
                                </SwiperSlide>
                                <SwiperSlide className='bg-center max-h-full bg-cover flex justify-center bottom-0 w-[11.25rem] h-[18.75rem] lg:h-[31.25rem] lg:max-h-full'>
                                    <img src={cocacola4} className="lg:absolute lg:bottom-0 lg:max-h-full" />
                                </SwiperSlide>
                                <SwiperSlide className='bg-center max-h-full bg-cover flex justify-center bottom-0 w-[11.25rem] h-[18.75rem] lg:h-[31.25rem] lg:max-h-full'>
                                    <img src={cocacola5} className="lg:absolute lg:bottom-0 lg:max-h-full" />
                                </SwiperSlide>
                                <SwiperSlide className='bg-center max-h-full bg-cover flex justify-center bottom-0 w-[11.25rem] h-[18.75rem] lg:h-[31.25rem] lg:max-h-full'>
                                    <img src={cocacola6} className="lg:absolute lg:bottom-0 lg:max-h-full" />
                                </SwiperSlide>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Hero