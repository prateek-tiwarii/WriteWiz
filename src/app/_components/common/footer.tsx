import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#121212]'>
        <div className='container mx-auto py-4 flex justify-around mt-2'>
            <h1 className='text-3xl font-bold mt-2'>WriteWiz⚡</h1>
            <ul className='flex space-x-4 mt-2'>
                <li className='text-lg font-semibold'>Home</li>
                <li className='text-lg font-semibold'>Blog</li>
                <li className='text-lg font-semibold'>Write</li>
                <li className='text-lg font-semibold'>Learn</li>
                <li className='text-lg font-semibold'>Connect</li>
            </ul>
        </div>
        <hr className="border-t border-gray-600 my-4 w-[60%] mx-auto" />
        <div className='container mx-auto py-4'>
            <p className='text-white text-center'>© 2025 WriteWiz . All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer

