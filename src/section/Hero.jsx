import { useState } from 'react';
// 1. IMPORT the image file using the direct relative path
import heroBackgroundImage from '../assets/heropic.png'; 

function Hero() {
  const [count, setCount] = useState(0);

  return (
    <section 
      className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white pt-[64px] sm:pt-[76px]"
      // We use inline style here for the background image property
      style={{ backgroundImage: `url(${heroBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className='font-extrabold text-6xl'>Unlock Your Potential <br/> with Eduflux</div>
        <div className='font-bold text-l p-4'>Smart tools for smart learning, bridging the gap to future skills</div>
        <div className='flex gap-6 mt-4'>
            <button  className=' font-bold bg-white hover:bg-gray-400 text-blue-500 text-l p-3 pl-6 pr-6 rounded-lg transition duration-300'>Explore Feature</button>
            <button className=' font-bold bg-blue-600 hover:bg-sky-400 text-white text-l p-3 pl-5 pr-5 rounded-lg transition duration-300'>Get Started</button>
        </div>

    </section>
  );
}

export default Hero;