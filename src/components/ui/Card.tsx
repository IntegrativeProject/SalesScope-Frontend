import React from 'react'

type CardProps = {
  w?:number,
  h?:number
  worth?:number
  percentage?:string
  mainText?:string
  endText?:string
}


export default function Card({w,h,worth,percentage,mainText,endText}:CardProps) {

  return (
    <div className={`bg-white w-${w} h-${h} rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:scale-101 `}  >
        <h1 className='text-gray-500 p-4 '>{mainText}</h1>
        <h1 className='font-bold ml-4 text-3xl'>{worth}</h1>
        <h3 className=' text-gray-500 p-4 mt-3 ml-6' >{percentage}{endText}</h3>
    </div>
  )
}
