'use client'
import React from 'react';
import { SectionWrapper } from '../hoc';
import DivAnimate from '../common/DivAnimate';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motions';
import PAnimate from '../common/PAnimate';
import { projects } from '@/constants';
import { Tilt } from 'react-tilt';
import Image from 'next/image';
import { github } from '@/assets';

const ProjectCard=({index,name,description,tags,image,source_code_link})=>{
    return (
        <DivAnimate variants={fadeIn("up","spring", index * 0.5, 0.75)}>
            <Tilt option={{
                max:45,
                scale:1,
                speed:450
            }}
            className='p-5 bg-tertiary rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <Image  src={image} alt={name} className='object-cover w-full h-full rounded-2xl'/>

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div onClick={()=>window.open(source_code_link,"_blank")}
                            className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'
                        >
                            <Image src={github} alt='github' className='object-contain w-1/2 h-1/2'/>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>
                <div className='flex flex-wrap gap-2 mt-4'>
                    {tags.map((tag)=>(
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>

            </Tilt>
        </DivAnimate>
    )
}

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