import { useState } from 'react'

function Header() {

  return (
    <div className = 'flex justify-around items-center p-4 bg-white text-white fixed top-0 w-full z-10 shadow-md'>
      <h1 className='font-extrabold text-4xl text-black cursor-pointer'>EduFlux</h1>
      <ul className='list-none flex gap-6'>
        <li className='cursor-pointer hover:text-gray-500 transition duration-150 text-black'>
  Scheduling
</li>
        <li className='cursor-pointer hover:text-gray-500 transition duration-150 text-black'>AI Quesions</li>
        <li className='cursor-pointer hover:text-gray-500 transition duration-150 text-black'>Analytics</li>
        <li className='cursor-pointer hover:text-gray-500 transition duration-150 text-black'>Doubt Solving</li>
        <li className='cursor-pointer hover:text-gray-500 transition duration-150 text-black'>Doubt Solving</li>
        <li className='cursor-pointer hover:text-gray-500 transition duration-150 text-black'>Resume Analysis</li>
      </ul>
      <div className='flex gap-4'>
        <button className='font-semibold text-black text-xl p-3 border-2 border-black rounded-lg hover:bg-gray-200'>Login</button>
        <button className='bg-blue-600 hover:bg-sky-400 font-semibold text-white text-xl p-3 rounded-lg transition duration-300'>Signup</button>
      </div>
    </div>
  )
}

export default Header
