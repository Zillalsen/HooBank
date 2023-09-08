import React, { useState } from 'react'
import { navLinks } from '../constants'
import { logo,menu,close } from '../assets'

export default function Navbar() {
  const [toggle,setToggle] = useState(false)
  return (
    <nav className='w-full flex items-center justify-between py-6 navbar'>
        <img src={logo} alt="logo" className='w-[124px] h-[32px]' />
      <ul className='hidden sm:flex items-center justify-end flex-1 list-none '>
        {navLinks.map((link,index) => 
          <li  className={`text-white font-poppins font-normal cursor-pointer text-[16px]
          ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} `} key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        )}
      </ul>
      <div className='flex items-center justify-end flex-1 sm:hidden'>
          <img src={toggle ? close : menu} 
          onClick={() => setToggle(prev => !prev)} 
          className='w-[28px] h-[28px] object-contain cursor-pointer' 
          alt="menu" />
      </div>
      <div className={
      `${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient 
      absolute top-20 right-0 mx-4 my-2 min-w-[120px] rounded-xl sidebar`
      }>
        <ul className='sm:hidden flex flex-col items-center justify-center list-none '>
        {navLinks.map((link,index) => 
          <li  className={`text-white font-poppins font-normal cursor-pointer text-[16px]
          ${index === navLinks.length -1 ? 'mb-0' : 'mb-4'} `} key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        )}
        </ul>
      </div>
    </nav>
  )
}
