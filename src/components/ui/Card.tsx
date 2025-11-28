import React from 'react'

export default function Card() {
  return (
    <div className='bg-white w-78 h-50 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:scale-101   ' >
        <h1 className='text-gray-500 p-4 '>Total Order</h1>
        <h1 className='font-bold ml-4 text-3xl'>10293</h1>
        <h3 className=' text-gray-500 p-4 mt-3 ml-6' >1.3% Up from past week</h3>
    </div>
  )
}
