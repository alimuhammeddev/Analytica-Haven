import { message, phone } from '../assets'

const TalkToUs = () => {
  return (
    <section>
        <div className='bg-[#193D6F]'>
            <div className="max-w-7xl mx-auto lg:p-8 p-5">
                <div className='flex items-center lg:flex-row flex-col justify-center lg:gap-16 gap-7 my-[1.5rem]'>
                    <div className='bg-[#D1D8E2] px-7 py-[3rem] space-y-5 rounded-2xl w-full lg:w-[40%]'>
                        <img src={phone} alt="" className='mx-auto lg:w-16 lg:h-16 w-12'/>
                        <h2 className='text-[#193D6F] font-campton lg:text-2xl font-semibold text-center'>Talk to US</h2>
                        <p className='font-campton text-center'>Interested in Analytica team? Just pick up the phone 
                        to call  a member of our team - 09013562178</p>
                    </div>

                    <div className='bg-[#D1D8E2] px-7 py-[3rem] space-y-5 rounded-2xl w-full lg:w-[40%]'>
                        <img src={message} alt="" className='mx-auto lg:w-16 lg:h-16 w-12'/>
                        <h2 className='text-[#193D6F] font-campton lg:text-2xl font-semibold text-center'>Contact Support</h2>
                        <p className='font-campton text-center'>You need help from your friends or an Analytica support rep? We’re here for you - analyticalhaven@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TalkToUs