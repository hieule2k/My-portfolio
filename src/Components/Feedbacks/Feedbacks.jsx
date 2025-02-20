'use client'
import React from 'react';
import { styles } from '@/styles';
import DivAnimate from '../common/DivAnimate';
import { fadeIn, textVariant } from '@/utils/motions';
import { testimonials } from '@/constants';
import Image from 'next/image';
import { SectionWrapper } from '../hoc';

const FeedbackCard = ({index,testimonial,name,designation,company,image}) => (
     <DivAnimate variants={fadeIn("","spring",index * 0.5,0.75)} 
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
     >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
            <div className='flex items-center justify-between gap-1 mt-7'>
                <div className='flex flex-col flex-1'>
                    <p className='text-white font-medium text-[16px]'><span className='blue-text-gradient'>@</span>{name}</p>
                    <p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>
                </div>

                <Image width={40} height={40} src={image} alt={`feedback-by-${name}`} className='object-cover w-10 h-10 rounded-full'/>
            </div>
        </div>

    </DivAnimate>
)

const Feedbacks = () => {
    return (
        <div className='mt-12 bg-black-100 rounded-[20px]'>
            <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                <DivAnimate variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>Testimonials.</h2>
                </DivAnimate>
            </div>
            <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                {testimonials.map((testimonial,index)=>(
                    <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks);