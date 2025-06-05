import React from 'react'
import { getintouch, message, phone } from '../assets'

const TalkToUs = () => {
  return (
    <section>
        <div className='bg-[#193D6F]'>
            <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
                <div className='flex items-center lg:justify-between lg:flex-row flex-col gap-5 lg:mt-20'>
                    <div className='lg:mt-0 mt-5 lg:space-y-7 space-y-2'>
                        <h1 className='font-campton text-[#ffffff] font-semibold lg:text-4xl text-xl md:text-justify text-center'>Get in touch with us for more <br />information or help.</h1>
                        <p className='lg:text-lg font-campton text-[#ffffff] md:block hidden'>If you have any questions or needs, we are here for you</p>
                    </div>
                    <div>
                        <img src={getintouch} alt="" />
                    </div>
                </div>

                <div className='flex items-center lg:flex-row flex-col justify-between lg:gap-16 gap-7 mt-12'>
                    <div className='bg-[#D1D8E2] p-10 space-y-5 rounded-2xl'>
                        <img src={phone} alt="" className='mx-auto lg:w-16 lg:h-16 w-12'/>
                        <h1 className='text-[#193D6F] font-campton lg:text-2xl font-semibold text-center'>Talk to US</h1>
                        <p className='font-campton text-center'>Interested in Analytica team? Just pick up the phone 
                        to call  a member of our team - 09013562178</p>
                    </div>

                    <div className='bg-[#D1D8E2] p-10 space-y-5 rounded-2xl'>
                        <img src={message} alt="" className='mx-auto lg:w-16 lg:h-16 w-12'/>
                        <h1 className='text-[#193D6F] font-campton lg:text-2xl font-semibold text-center'>Contact Support</h1>
                        <p className='font-campton text-center'>You need help from your friends or an Analytica support rep? We’re here for you - analyticalhaven@gmail.com</p>
                    </div>
                </div>
            </div><br /><br />
        </div>
    </section>
  )
}

export default TalkToUs