'use client'
import React from 'react';
import { SectionWrapper } from '../hoc';
import DivAnimate from '../common/DivAnimate';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motions';
import PAnimate from '../common/PAnimate';
import { projects } from '@/constants';
import ProjectCard from './ProjectCard';

const Works = () => {
    return (
        <>
            <DivAnimate variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </DivAnimate>

            <div className='flex w-full'>
                <PAnimate variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </PAnimate>
            </div>

            <div className='flex flex-wrap mt-20 gap-7'>
                {projects.map((project,index)=>(
                    <ProjectCard key={`project-${index}`}
                    index={index}
                    {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");