import React from 'react'
import ServiceSection from './Service/ServiceSection'

const HomeHighlight = () => {
  return (
    <>
        <div className=" main flex flex-col lg:flex-row px-20 py-24 lg:px-5">
            <div className='flex flex-col  justify-around sm:flex-row lg:w-2/3'>
                <div className=' w-60'>
                    <img src="./src/assets/generic-1.jpg" alt="" />
                    <h3 className='text-xl font-bold py-2'>IT CONSULTING</h3>
                    <p className=" text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.</p>
                </div>
                <div className='w-60'>
                    <img src="./src/assets/generic-2.jpg" alt="" />
                    <h3 className='text-xl font-bold py-2'>IT SUPPORT</h3>
                    <p className=" text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.</p>
                </div>
            </div>
            <div className=''>
                <h3 className=" text-slate-500 font-bold" >WHO WE ARE</h3>
                <h3 className='text-4xl font-extrabold'>We focus on bringing value and solve business challenges through the delivery of modern IT services and solutions</h3>
                <p className='py-2 text-slate-500 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.</p>
                <button className='text-blue-600 font-bold text-xl'>Find Out More</button>
            </div>
        </div><hr />

        
        <ServiceSection />


        <section>
            <div className='flex flex-col sm:flex-row justify-between px-20 text-center items-center pb-10'>
                <div className="flex flex-col items-center text-center">
                    <h3 className="border-4 border-black w-28 h-28 rounded-full text-blue-700 text-5xl font-bold flex items-center justify-center">1</h3>
                    <h3 className='font-bold text-xl py-4'>1. BRAINSTORM</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h3 className="border-4 border-black w-28 h-28 rounded-full text-blue-700 text-5xl font-bold flex items-center justify-center">2</h3>
                    <h3 className='font-bold text-xl py-4'>2. DEVELOPMENT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h3 className="border-4 border-black w-28 h-28 rounded-full text-blue-700 text-5xl font-bold flex items-center justify-center">3</h3>
                    <h3 className='font-bold text-xl py-4'>3. DELIVERY</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeHighlight