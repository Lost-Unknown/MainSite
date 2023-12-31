import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Games = () => {
  return (
    <div>
      <p className=' text-center w-full text-8xl text-outline-b2 lilita-font text-white py-10'>My Games</p>
    <div className='w-full grid  lg:grid-cols-3 h-auto md:grid-cols-2 grid-cols-1 gap-3'>
      <Link href='/games/aboveit' className='flex flex-col gap-4 no-underline bg-white/20 w-full  p-4 rounded-3xl hover:bg-white/40 transition-all'>
        <Image 
        src='/assets/AboveItLogo.png'
        width={150}
        height={150}
        className='rounded-2xl aspect-square'
        />
        <div className='flex flex-col justify-start items-start'>
          <p className='lilita-font text-white text-outline-b2 text-5xl pb-4'>Above It</p>
          <p className='lilita-font text-white text-outline-b1 text-2xl'>Are You Ready To Get Some MILK!</p>
          <Link className=' w-52 h-16 z-10' href='https://play.google.com/store/apps/details?id=com.LostD.AboveIt'><Image
          src='/assets/google.png'
          width={400}
          height={200}
          className='w-full h-full'/></Link>
        </div>
      </Link>
      <Link href='/games/highwayhavoc' className='flex flex-col gap-4 no-underline bg-white/20 w-full p-4 rounded-3xl hover:bg-white/40 transition-all'>
        <Image 
        src='/assets/Traffic Logo.png'
        width={150}
        height={150}
        className='rounded-2xl aspect-square'
        />
        <div className='flex flex-col justify-start items-start'>
          <p className='lilita-font text-white text-outline-b2 text-5xl pb-4'>Highway Havoc</p>
          <p className='lilita-font text-white text-outline-b1 text-2xl'>Speed through Highway Havoc: Dodge, Boost, Conquer!</p>
          <Link className=' w-52 h-16 z-10' href='https://play.google.com/store/apps/details?id=com.LostGamesltd.HeavyTrafficRacer'><Image
          src='/assets/google.png'
          width={400}
          height={200}
          className='w-full h-full'/></Link>
        </div>
      </Link>
    </div>
    </div>
  )
}

export default Games
