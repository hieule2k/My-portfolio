'use client'

import React from 'react';
import { Tilt } from 'react-tilt';
import Image from 'next/image';
import { fadeIn } from '@/utils/motions';
import DivAnimate from '../common/DivAnimate';

const ServiceCard = ({index,title,icon})=>{
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <DivAnimate variants={fadeIn('right','spring',0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div options={{
                    max:45,
                    scale:1,
                    speed:450
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                <Image width={64} height={64} src={icon} alt={title} className='object-contain w-16 h-16' />
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                </div>
            </DivAnimate>
        </Tilt>
    )
}

export default ServiceCard;