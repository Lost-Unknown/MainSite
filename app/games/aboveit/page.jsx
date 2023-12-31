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
          <p className="lilita-font text-white text-outline-b2 text-3xl">Are You Ready To Get Some MILK!</p>
          <Link className='pt-4 w-96 h-32 z-10' href='https://play.google.com/store/apps/details?id=com.LostD.AboveIt'><Image
          src='/assets/google.png'
          width={400}
          height={200}
          className='lg:w-full w-52 h-16 lg:h-full aspect-auto'/></Link>
        </div>
      </div>
      <p className="lilita-font text-white text-outline-b1 text-xl">Game is currently in BETA and is not fully developed .
Player might encounter bugs and glitches so please provide feedback about it</p>
      <Carousel className="rounded-xl p-0 w-full carousel-height">
      <Image
        src="https://play-lh.googleusercontent.com/PdCuQVoM40tKA7HigFs3xEpTxP89hqhREVUzqar2gWPm7L_yNyTvv5Zgp6cnCS1Siw=w2560-h1440-rw"
        alt="image 1"
        width={1000}
        height={700}
        className=" w-full h-full"
      />
      <Image
        src="https://play-lh.googleusercontent.com/xA2G0RhS1aKTp2qiMf6Ci1MzJp1g8UlJn9RTzwJK4th2viGEt_72WprzWMP9kXlN=w2560-h1440-rw"
        alt="image 2"
        width={1000}
        height={700}
        className=" w-full h-full"
      />
      <Image
        src="https://play-lh.googleusercontent.com/6LuVqy4JEBfTrd4fenIoMvUCso169e3IP0XQoLk8VVeIdc4yO_74lGaXgiR-GdrmCZYH=w2560-h1440-rw"
        alt="image 3"
        width={1000}
        height={700}
        className=" w-full h-full"
      />
      <Image
        src="https://play-lh.googleusercontent.com/j0D8JLHSK1YIhifyCFPTgUtp_nZl2JNpLlybhTnnxfTp6Smvp8bIvFTUMuAe5-NXjpyd=w2560-h1440-rw"
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
