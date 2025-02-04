import React from 'react';
import { styles } from '@/styles';
import ComputerCanvas from './canvas/Computer';
import { motion } from "framer-motion";
import CircleAnimate from './common/CircleAnimate';
import Image from 'next/image';
import herobg from "@/assets/second-pic.jpg"


const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 h-40 sm:h-80 violet-gradient' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I`m <span className='text-[#915eff]'>Hiếu</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I'm a developer specializing in user interfaces  <br className='sm:block' /> and web applications.
                    </p>
                </div>
            </div>
            <div className='absolute inset-0 flex items-center justify-center w-full bg-opacity-50 pointer-events-none top-[200px] '>
                <div className='w-1/2 sm:w-1/3' >
                    <Image src={herobg}
                        className='rounded'
                        alt="Background Image" />
                </div>
            </div>

            {/* <ComputerCanvas /> */}

            <div className='absolute flex items-center justify-center w-full xs:bottom-10 bottom-32'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <CircleAnimate animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                            className="w-3 h-3 mb-1 rounded-full bg-secondary" />
                    </div>
                </a>
            </div>

        </section >
    );
};

export default Hero;