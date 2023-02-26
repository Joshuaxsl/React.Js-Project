import React from 'react'

const Navbar = () => {
  return (
    <div className='px-40'>
        <nav className='flex justify-between items-center p-5 text-white'>
            <div>
            <p className=' text-2xl'>Joshua Santos</p>
            <p className=''>Web Developer</p>
            </div>
            <ul className='flex'>
                <li className='mx-5'><a href='www.facebook.com'>Home</a></li>
                <li className='mx-5'><a href='www.facebook.com'>About me</a></li>
                <li className='mx-5'><a href='www.facebook.com'>Projects</a></li>
                <li className='mx-5'><a href='www.facebook.com'>Resume</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar