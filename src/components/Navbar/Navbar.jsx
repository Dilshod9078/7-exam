import React from 'react'
import { NavLink } from 'react-router-dom'

import Home from '../../assets/Images/home.svg'
import Search from '../../assets/Images/Search.svg'
import Library from '../../assets/Images/Library.svg'
import Add from '../../assets/Images/add.svg'
import Like from '../../assets/Images/like.svg'
import Navlink from '../Navlink/Navlink'

function Navbar() {
  return (
    <div>
        <ul className='flex flex-col space-y-[20px] mb-[49px]'>
        <NavLink to={'/'} className='flex items-center gap-[20px] text-[#B3B3B3]' href="#">
                <img src={Home} alt="Home icon" width={32} height={32} />
                <span className='text-[16px] leading-[22.77px] font-bold '>Home</span>
         </NavLink>
         <li >
            <a className='flex items-center gap-[20px]' href="#">
                <img src={Search} alt="Home icon" width={32} height={32} />
                <span className='text-[16px] leading-[22.77px] font-bold text-[#B3B3B3]'>Search</span>
            </a>
         </li>
         <li>
            <a className='flex items-center gap-[20px]' href="#">
                <img src={Library} alt="Home icon" width={32} height={32} />
                <span className='text-[16px] leading-[22.77px] font-bold text-[#B3B3B3]'>Your Library</span>
            </a>
         </li>
         </ul>
         <ul className='flex flex-col space-y-[20px] mb-[20px]'>
         <li>
            <a className='flex items-center gap-[20px]' href="#">
                <img src={Add} alt="Home icon" width={32} height={32} />
                <span className='text-[16px] leading-[22.77px] font-bold text-[#B3B3B3]'>Create Playlist</span>
            </a>
         </li>
            <NavLink to={'/like'} className='flex items-center gap-[20px] text-[#B3B3B3] ' href="#">
                <img src={Like} alt="Home icon" width={32} height={32} />
                <span className='text-[16px] leading-[22.77px] font-bold  '>Liked Songs</span>
            </NavLink>
         </ul>
         <span className='block h-[1px] w-[250px] bg-[#282828] mb-[20px]'></span>
         <Navlink/>
    </div>
  )
}

export default Navbar