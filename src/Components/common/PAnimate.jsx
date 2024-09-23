'use client'
import React from 'react';
import { motion } from "framer-motion";


const PAnimate = ({ children,className, ...props }) => {
    return (
        <>
            <motion.p className={className} {...props}
            >
                {children}
            </motion.p>
        </>
    );
};

export default PAnimate;