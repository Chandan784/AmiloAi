import React from 'react'

const ServiceSection = () => {
  return (
    <>
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
    </>
  )
}

export default ServiceSection