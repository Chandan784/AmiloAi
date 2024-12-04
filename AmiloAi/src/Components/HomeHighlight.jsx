import React from 'react'

const HomeHighlight = () => {
  return (
    <>
        <div className="main flex flex-col lg:flex-row px-20 py-24">
            <div className='flex w-1/2 justify-around'>
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
            <div className='w-1/2'>
                <h3 className=" text-slate-500 font-bold" >WHO WE ARE</h3>
                <h3 className='text-4xl font-extrabold'>We focus on bringing value and solve business challenges through the delivery of modern IT services and solutions</h3>
                <p className='py-2 text-slate-500 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.</p>
                <button className='text-blue-600 font-bold text-xl'>Find Out More</button>
            </div>
        </div><hr />

        <section>
            <div className='py-20 px-20 text-center'>
                <h4 className=' text-center text-slate-500 font-bold'>OUR SERVICES</h4>
                <h3 className='text-4xl font-bold'>World-Class Solutions for your Business</h3>
                <div className='flex justify-between'>
                    <div>
                        <img src="./src/assets/Untitled design.png" alt="" />
                        <h3 className='text-blue-600 font-bold text-3xl'>Cloud Services</h3>
                        <p className='text-slate-500 px-4 text-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.</p>
                        <button className='font-bold py-4 text-xl'>READ MORE +</button>
                    </div>
                    <div>
                        <img src="./src/assets/Untitled design2.png" alt="" />
                        <h3 className='font-bold text-3xl'>Tech Support</h3>
                        <p className='text-slate-500 px-4 text-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.</p>
                        <button className='font-bold py-4 text-xl text-blue-700'>READ MORE +</button>
                    </div>
                    <div>
                        <img src="./src/assets/Untitled design3.png" alt="" />
                        <h3 className='text-blue-600 font-bold text-3xl'>Data Security</h3>
                        <p className='text-slate-500 px-4 text-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.</p>
                        <button className='font-bold py-4 text-xl'>READ MORE +</button>
                    </div>
                    <div>
                        <img src="./src/assets/Untitled design4.png" alt="" />
                        <h3 className='font-bold text-3xl'>Software Dev</h3>
                        <p className='text-slate-500 px-4 text-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.</p>
                        <button className='font-bold py-4 text-xl text-blue-700'>READ MORE +</button>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='flex justify-between px-20 text-center items-center pb-10'>
                <div className="flex flex-col items-center text-center">
                    <h3 className="border-4 border-black w-28 h-28 rounded-full text-blue-700 text-5xl font-bold flex items-center justify-center hover:hidden">1</h3>
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