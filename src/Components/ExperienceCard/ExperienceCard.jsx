import Image from 'next/image';
import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import DivAnimate from '../common/DivAnimate';
import { fadeIn } from '@/utils/motions';

const ExperienceCard = ({ experience,index }) => {
    return (
        <VerticalTimelineElement contentStyle={{
            background: "#1d1836",
            color: "#fff",
            visibility: "visible"
        }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg, visibility: "visible" }}
            icon={<div className='flex items-center justify-center w-full h-full'>
                <Image src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
            </div>}
        >
            <DivAnimate variants={fadeIn('','',0.1,1)} >
                <h3 className='text-white text-[24px] font-bold'>
                    {experience.title}
                </h3>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
                <ul className='mt-5 ml-5 space-y-2 list-disc'>
                    {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`}
                            className='text-white-100 text-[14px] pl-1 tracking-wider'
                        >
                            {point}
                        </li>
                    ))}

                </ul>
            </DivAnimate>
        </VerticalTimelineElement>)
}

export default ExperienceCard;