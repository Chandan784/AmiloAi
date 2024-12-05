import React from 'react'

const Header = ({title}) => {
  return (
    <>
        <header>
            <div className='h-68 bg-blue-700 mb-8 p-20'>
                <h3 className='text-6xl text-white font-extrabold'>{title}</h3>
            </div>
        </header>
    </>
  )
}

export default Header