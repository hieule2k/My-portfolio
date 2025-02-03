import React from 'react';
import { motion } from "framer-motion";
import { staggerContainer } from '@/utils/motions';
import { styles } from '@/styles';


const SectionWrapper = (Components, idName) => (function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Components />
        </motion.section>
    )
})

export default SectionWrapper;