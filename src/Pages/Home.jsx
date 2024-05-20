import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Asosiy from './Asosiy/Asosiy'
import Like from './Like/Like'
import SinglePage from './SinglePage/SinglePage'

import User from '../assets/Images/user.svg'
import Exit from '../assets/Images/exit.svg'
import CardImg from '../components/CardImg/CardImg'

function Home({code}) {
  return (
    <>
      <div className='flex items-center justify-between '>
        <div className='w-[28%] h-[100vh] bg-black pl-[18px] pr-[22px] pt-[70px] pb-[100px] overflow-y-auto overflow-x-hidden'>
          <Navbar/>
        </div>
        <div className='w-full h-[100vh] overflow-y-auto'>
          <Routes>
              <Route path='/' element={<Asosiy code={code}/>}/>
              <Route path='/like' element={<Like/>}/>
              <Route path='/single/:id' element={<SinglePage/>}/>
          </Routes>
        </div>
        <div className='w-[31%] h-[100vh] bg-black px-[15px] pt-[29px] pb-[100px] overflow-y-auto overflow-x-hidden'>
          <div className='flex items-center justify-between mb-[35px]'>
              <p className='text-[18px] leading-[25.3px] font-bold text-white'>Friend Activity</p>
              <div className='flex items-center gap-[19px]'>
                  <img src={User} alt="User icon" width={32} height={32} />
                  <img src={Exit} alt="User icon" width={18} height={18} />
              </div>
          </div>
          <p className='text-[#CCCCCC] mb-[23px] font-normal leading-[24px] text-[16px]'>Let friends and followers on Spotify see what you’re listening to.</p>
          <CardImg/>
          <p className='text-[#CCCCCC] mb-[23px] font-normal leading-[25px] text-[16px]'>Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
          <div className='flex items-center justify-center'>
          <button className='bg-white rounded-[40px] py-[20px] px-[63px] font-bold text-[16px] leading-[22.77px]'>SETTINGS</button>
          </div>
        </div>
      </div>
   

    </>
  )
}

export default Home