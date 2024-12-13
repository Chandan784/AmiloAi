import React from 'react'

const ServiceSection = () => {
    const Services = [
        {
            title:'Cloud Services',
            imgSrc:'./src/assets/Untitled design.png',
            para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.',
            btn:'READ MORE +',
        },
        {
            title:'Tech Support',
            imgSrc:'./src/assets/Untitled design2.png',
            para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.',
            btn:'READ MORE +',
        },
        {
            title:'Data Security',
            imgSrc:'./src/assets/Untitled design3.png',
            para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.',
            btn:'READ MORE +',
        },
        {
            title:'Software Dev',
            imgSrc:'./src/assets/Untitled design4.png',
            para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.',
            btn:'READ MORE +',
        },
    ]
  return (
    <>
        <section>
            <div className='py-20 px-20 text-center'>
                <h4 className=' text-center text-slate-500 font-bold'>OUR SERVICES</h4>
                <h3 className='text-4xl font-bold'>World-Class Solutions for your Business</h3>
                <div className='flex flex-col sm:flex-row justify-between '>
                    {Services.map((Services,index)=>(
                    <div>
                        <img src={Services.imgSrc} alt="" />
                        <h3 className='text-blue-600 font-bold text-3xl'>{Services.title}</h3>
                        <p className='text-slate-500 px-4 text-s'>{Services.para}</p>
                        <button className='font-bold py-4 text-xl'>{Services.btn}</button>
                    </div>
        ))}

                </div>
            </div>
         </section>
    </>
  )
}

export default ServiceSection