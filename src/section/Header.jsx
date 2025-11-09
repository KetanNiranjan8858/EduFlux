import { useState } from 'react'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'flex justify-around items-center p-4 bg-blue-600 text-white'>
      <h1 className='font-extrabold text-4xl'>EduFlux</h1>
      <ul className='list-none flex gap-6'>
        <li className=''>Scheduling</li>
        <li>AI Quesions</li>
        <li>Analytics</li>
        <li>Doubt Solving</li>
        <li>Doubt Solving</li>
        <li>Resume Analysis</li>
      </ul>
      <div className='flex gap-4'>
        <button className='font-semibold text-xl'>Login</button>
        <button className='font-semibold text-xl'>Signup</button>
      </div>
    </div>
  )
}

export default Header
