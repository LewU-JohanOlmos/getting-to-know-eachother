import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className='bg-[#1D1D1D] text-[#FDFFFC] px-6 flex items-center justify-center m-auto'>
            <div className='max-w-[900px] mx-auto mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='py-20'>
                        <p className='text-4xl font-semibold'>Johan Olmos</p>
                        <p className='text-xl font-normal mb-4'>Founder and CEO of <a className='text-[#1D64C1] font-medium' target='_blank' href='https://astrobie.com'>Astrobie LLC</a></p>
                        <p className='text-sm'>Junior Student at <a target='_blank' href='https://lewisu.edu'>Lewis University</a></p>
                        <div className='flex-row'>
                            <p className='text-sm'><span className='font-semibold'>Major: </span>Cybersecurity</p>
                            <p className='text-sm'><span className='font-semibold'>Year: </span>1st Year (transfer student)</p>
                        </div>
                        <p className='font-semibold mt-4'>Contact</p>
                        <p className='text-sm'><span className='font-semibold'>Email: </span><Link to={"mailto:johanolmoszavala@lewisu.edu"}></Link>johanolmoszavala@lewisu.edu</p>
                    </div>
                    <div className='h-full w-full'>
                        <img src='me.png'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero