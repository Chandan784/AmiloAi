import React from 'react'

const ContactPath = () => {
    return (

        <>
            <div className='h-96'>
                <div className=' justify-center items-center h-full'>
                    
                <h2>Send Message</h2>
                    <form action="">
                        
                        <table>
                            <tr>
                                
                                <td><label >First Name</label> <br /> 
                                <input type="text" placeholder='Enter First Name' className='border rounded-sm' /></td>
                                
                                <td><label >Last Name</label> <br />
                                <input type="text" placeholder='Enter Last Name'  className='border rounded-sm'/></td>
                            </tr>
                            <tr>
                                <td><label >Email</label><br />
                                <input type="email" placeholder='Enter Email Address'  className='border rounded-sm'/></td>
                                <td><label>Phone Number</label><br />
                                <input type="number" placeholder='Enter Phone Number' className='border rounded-sm' /></td>
                            </tr>

                        </table>
                    </form>
                </div>


                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default ContactPath