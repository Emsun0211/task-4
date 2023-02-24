import Image from 'next/image'
import React from 'react'

function TestimonialCard(props) {
  return (
    <>
      <div className='bg-white border-2 space-y-5 border-[#F53838] rounded-[10px] p-[30px] max-w-[400px] h-[230px]'>
        <div className='flex justify-between items-center'>
          <div className='flex  items-center space-x-5'>
            <Image src={`/${props.profile}`} width={50} height={50} />
            <div className=''>
              <h4 className='text-[#0B132A] text-lg'>{props.name}</h4>
              <p className='text-[#4F5665] text-sm'>{props.location}</p>
            </div>
          </div>
          <div className='flex items-center space-x-[10px]'>
            <p className='text-[#0B132A] text-base'>{props.rating}</p>
            <Image src={'/star.svg'} width={16} height={16} />
          </div>
        </div>
        <p className='text-[#0B132A] text-base max-w-[340px]'>“ {props.comment}”</p>
      </div>
    </>
  )
}

export default TestimonialCard