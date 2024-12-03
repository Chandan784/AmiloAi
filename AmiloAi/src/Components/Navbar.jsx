import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between px-10 h-16 items-center'>
        <div className="img">
          <h1 className='text-2xl font-bold'>Applute</h1>
        </div>
        <div className="navList">
        <ul className='flex text-xl font-semibold'>
        <li className='px-4'>
          <Link to={"/"}>Home</Link>
        </li>
        <li className='px-4'>
          <Link to={"/About"}>About</Link>
        </li>
        <li className='px-4'>
          <Link to={"/Careers"}>Careers</Link>
        </li>
        <li className='px-4'>
          <Link to={"/Contact"}>Contact</Link>
        </li>
        <li className='px-4'>
          <Link to={"/Service"}>Service</Link>
        </li>
      </ul>
        </div>
      </div>
      
    </>
  )
}

export default Navbar