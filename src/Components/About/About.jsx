'use client'
import React from 'react';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motions';
import { services } from '@/constants';

import ServiceCard from './ServiceCard';
import DivAnimate from '../common/DivAnimate';
import PAnimate from '../common/PAnimate';
import { SectionWrapper } from '../hoc';

const About = () => {
    return (
        <>
            <DivAnimate variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </DivAnimate>

            <PAnimate variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                I&apos;m a skilled software developer with experience in JavaScript, HTML and
                CSS, and expertise in frameworks like React and Nextjs. I&apos;ve also worked with version control systems like Git and have experience with UI/UX design principles. I&apos;m a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let&apos;s work together to bring your ideas to life!
            </PAnimate>

            <div className='flex flex-wrap gap-10 mt-20'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");