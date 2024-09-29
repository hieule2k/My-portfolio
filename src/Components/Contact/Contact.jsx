'use client'
import React, { useRef, useState } from 'react';
import { SectionWrapper } from '../hoc';
import DivAnimate from '../common/DivAnimate';
import { slideIn } from '@/utils/motions';
import { styles } from '@/styles';
import EarthCanvas from './Earth';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const formRef=useRef()
    const [form,setForm]=useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading,setLoading]=useState(false)

    const handleChange=(e)=>{
        const { name , value} = e.target;
        setForm({...form,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoading(true)

        //template_azq48s8
        //service_v9wmdqk
        //3ivyz1YFiGOqTNFpj

        emailjs.send('service_v9wmdqk','template_azq48s8',
            {
                from_name:form.name,
                to_name:"hieule",
                from_email:form.email,
                to_email:"hieulequang455@gmail.com",
                message:form.message
            },
            '3ivyz1YFiGOqTNFpj'
        ).then(()=>{
            setLoading(false)
            alert('Thanh you. I will get back to you as soon as possible')

            setForm({
                name:"",
                email:"",
                message:""
            })
        },(err)=>{
            setLoading(false)
            console.log(err)

            alert("Something went wrong.")
        })
    }

    return (
        <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
            <DivAnimate variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-8 mt-12'
                >
                    <label className='flex flex-col'>
                        <span className='mb-4 font-medium text-white'>Your Name</span>
                        <input type='text' name="name" value={form.name} onChange={handleChange} placeholder="What's your name"
                        className='px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none'
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='mb-4 font-medium text-white'>Your Email</span>
                        <input type='email' name="email" value={form.email} onChange={handleChange} placeholder="What's your email"
                        className='px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none'
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='mb-4 font-medium text-white'>Your Message</span>
                        <textarea rows="7" type='text' name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say"
                        className='px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none'
                        />
                    </label>

                    <button className='px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary w-fit shadow-primary rounded-xl' type='submit'>
                        {loading ? "Sending" : "Send"}
                    </button>
                </form>
            </DivAnimate>

            <DivAnimate   variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </DivAnimate>

        </div>
    );
};

export default SectionWrapper(Contact, "contact");