import React from 'react'
import UserImg from '../../assets/Images/user-img.svg'
import Union from '../../assets/Images/Union.svg'
function CardImg() {
  return (
    <div className='flex flex-col space-y-[20px] mb-[21px]'>
        <div className='flex items-center space-x-[15px]'>
            <img src={UserImg} alt="User icon" width={62} height={62} />
            <img src={Union} alt="Union image" width={102} height={42} />
        </div>
        <div className='flex items-center space-x-[15px]'>
            <img src={UserImg} alt="User icon" width={62} height={62} />
            <img src={Union} alt="Union image" width={102} height={42} />
        </div>
        <div className='flex items-center space-x-[15px]'>
            <img src={UserImg} alt="User icon" width={62} height={62} />
            <img src={Union} alt="Union image" width={102} height={42} />
        </div>
    </div>
  )
}

export default CardImg