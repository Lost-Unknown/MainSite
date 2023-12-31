import React from 'react'
import Image from 'next/image'
const Home = () => {
  return (
    <div className='h-auto flex md:flex-row flex-col-reverse justify-center gap-8 items-center'>
      <div className="flex w-100 flex-col justify-center  items-start">
        <div className=' w-100 md:py-44 py-6'>
          <p className=' text-8xl m-0 text-white text-outline-b2 lilita-font  font-bold'>FACELESS GUY</p>
          <p className=' text-3xl m-0 text-white text-outline-b2 lilita-font '>YOUTUBER, GAME AND WEB DEVELOPER</p>
        </div>
      </div>
      <Image
      src='/assets/Logo.png'
      width={400}
      height={400}
      className='blob-image'
      />
    </div>
  )
}

export default Home
