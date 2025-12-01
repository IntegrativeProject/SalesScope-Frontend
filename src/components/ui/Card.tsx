import React from 'react'

type CardProps = {
  w?:number,
  h?:number
  worth?:number
  percentage?:string
  mainText?:string
  endText?:string
  iconRoute?:string
}


export default function Card({w,h,worth,percentage,mainText,endText,iconRoute}:CardProps) {

  return (
    <div className={`relative bg-white w-${w} h-${h} rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:scale-101 `}  >
        <h1 className='text-gray-500 p-4 '>{mainText}</h1>
        <div className='flex ' >
        <h1 className='font-bold  text-4xl ml-10'>{worth}</h1>
        <img src={`${iconRoute}`} alt="icon" className='w-15 h-15 absolute top-4 right-4 '/>
        </div>
        <h3 className=' text-gray-500 p-4 mt-3 ml-6' >{percentage}{endText}</h3>
    </div>
  )
}
