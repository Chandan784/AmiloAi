import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-blue-700 p-20 text-white'> 
        <div className="lg:flex sm:block justify-between leading-8 mb-10">
            <div>
                <h3 className='text-xl font-bold pb-4'>OUR ADDRESS</h3>
                <p>12345 Porto Blvd.</p>
                <p>Suite 1500</p>
                <p>Los Angeles, California</p>
                <p> 90000</p>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-4'>OUR CONTACTS</h3>
                <p>SUPPORT</p>
                <p className='font-bold text-2xl'>800-123-4567</p>
                <p>SALES</p>
                <p className='font-bold text-2xl'>800-123-4568</p>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-4'>USEFUL LINKS</h3>
                <p>Our Services</p>
                <p>Payment Methods</p>
                <p>Services Guide</p>
                <p>FAQs</p>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-4'>OUR SERVICES</h3>
                <p>Cloud Services</p>
                <p>Tech Support</p>
                <p>Data Security</p>
                <p>Software Dev</p>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-4'>ABOUT</h3>
                <p>About Us</p>
                <p>Send a Message</p>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-4'>SOCIAL MEDIA</h3>
            </div>
        </div><hr />
        <div className='flex justify-between mt-10'>
            <div>
                <h3 className='text-2xl font-bold'>Applute</h3>
            </div>
            <div>
                <p>Porto IT Services. © 2023. All Rights Reserved</p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer