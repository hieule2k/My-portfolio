'use client'
import React from 'react';
import 'react-vertical-timeline-component/style.min.css'
import { textVariant } from '@/utils/motions';
import { styles } from '@/styles';
import { SectionWrapper } from '../hoc';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiences } from '@/constants';
import ExperienceCard from './ExperienceCard';
import DivAnimate from '../common/DivAnimate';


const Experience = () => {
    return (
        <>
            <DivAnimate variants={textVariant()}>
                <p className={styles.sectionSubText}>What i have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </DivAnimate>

            <div className='flex flex-col mt-20'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");