'use client'
import React, { useState } from 'react';
import { styles } from '@/styles';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/HieuLogo.png"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import { navLinks } from '@/constants';

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)
    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
                <Link href='/' className='flex items-center gap-2' onClick={() => {
                    setActive("")
                    window.scrollTo(0, 0)
                }}>
                    <Image src={logo} alt='logo' className='object-contain w-9 h-9' />
                    <p className='text-white justify-center flex text-[18px] font-bold cursor-pointer'>
                        Hieu &nbsp; 
                        <span className='hidden sm:block'>| Frontend Developer</span>
                    </p>
                </Link>
                <ul className='flex-row hidden gap-10 text-white list-none sm:flex'>
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer `}
                            onClick={() => setActive(link.title)}
                        >
                            <Link href={`#${link.id}`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center justify-end flex-1 sm:hidden'>
                    <Image src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />

                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='flex flex-col items-start justify-end gap-4 list-none'>
                            {navLinks.map((link) => (
                                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px] `}
                                    onClick={() => {
                                        setToggle(!toggle)
                                        setActive(link.title)
                                    }}
                                >
                                    <Link href={`#${link.id}`}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;