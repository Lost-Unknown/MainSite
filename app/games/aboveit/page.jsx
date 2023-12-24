"use client"
import React from "react";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";
const AboveIt = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src="/assets/AboveItLogo.png"
          width={300}
          height={300}
          className=" rounded-3xl"
        />
        <div className="flex flex-col justify-start items-start">
          <p className="lilita-font text-white text-outline-b2 text-8xl pb-4">Above It : Get the MILK</p>
          <p className="lilita-font text-white text-outline-b2 text-3xl">Short Description</p>
          <Link className='pt-4 w-96 h-32 z-10' href='https://play.google.com/store/apps/details?id=com.LostGamesltd.HeavyTrafficRacer'><Image
          src='/assets/google.png'
          width={400}
          height={200}
          className='lg:w-full w-52 h-16 lg:h-full aspect-auto'/></Link>
        </div>
      </div>
      <p className="lilita-font text-white text-outline-b1 text-xl">Detailed Description</p>
      <Carousel className="rounded-xl p-0 w-full carousel-height">
      <Image
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        width={1000}
        height={700}
        className=" w-full h-full"
      />
      <Image
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        width={1000}
        height={700}
        className=" w-full h-full"
      />
      <Image
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        width={1000}
        height={700}
        className=" w-full h-full"
      />
    </Carousel>
    <div className="w-full flex justify-center">
        <Link href='/games/aboveit/privacypolicy' className=" text-white text-outline-b1 lilita-font text-lg">Privacy Policy</Link>
    </div>
    </div>
  );
};

export default AboveIt;
