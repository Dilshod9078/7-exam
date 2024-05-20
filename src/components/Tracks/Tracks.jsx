import React from 'react'

function Tracks({item, choosePlay}) {
  return (
    
         <li onClick={() => choosePlay(item)} className='w-[224px] cursor-pointer rounded-[8px] p-[20px] bg-[#1B1B1B]'>
            <img className='rounded-[4px]' src={item.img} alt="Image" width={182} height={182} />
            <div className='flex flex-col items-start space-y-[8px] mt-[25px]'>
                <p className='text-[#FFFFFF] text-[20px] font-bold leading-[25.3px]'>{item.uri.name}</p>
                <strong className='text-[#B3B3B3] text-[18px] leading-[22.77px]'>{item.name}</strong>
                
            </div>
         </li>
  )
}

export default Tracks