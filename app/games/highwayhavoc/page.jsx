"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";

const HighwayHavoc = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src="/assets/Traffic Logo.png"
          width={300}
          height={300}
          className=" rounded-3xl"
        />
        <div className="flex flex-col justify-start items-start">
          <p className="lilita-font text-outline-b2 text-white text-8xl pb-4">Highway Havoc</p>
          <p className="lilita-font text-outline-b2 text-white text-3xl">
            Speed through Highway Havoc: Dodge, Boost, Conquer!
          </p>
          <Link
            className="pt-4 w-96 h-32 z-10"
            href="https://play.google.com/store/apps/details?id=com.LostGamesltd.HeavyTrafficRacer"
          >
            <Image
              src="/assets/google.png"
              width={400}
              height={200}
              className="lg:w-full w-52 h-16 lg:h-full aspect-auto"
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full gap-4 flex-col">
        <p className="lilita-font text-white  text-outline-b1 text-xl">
          Get ready to ignite your passion for speed and embark on a
          heart-pounding journey like no other! Introducing our exhilarating
          Traffic Racer game, where you'll find yourself at the helm of 17
          jaw-dropping cars, ready to conquer the asphalt in three mesmerizing
          scenes. Feel the pulse of the city as you weave through the bustling
          streets of City Day, where skyscrapers tower above you, and the energy
          is electric. As dusk falls, immerse yourself in the enigmatic
          atmosphere of City Night, where neon lights guide your path, and every
          corner unveils a new thrill.
        </p>
        <p className="lilita-font  text-outline-b1 text-white text-xl">
          But that's not all! Prepare to escape the urban chaos and venture into
          the untamed beauty of the Forest scene, where nature's symphony blends
          with the roar of engines. Dodge through winding roads surrounded by
          majestic trees, and feel the rush as you navigate through narrow
          paths, pushing your driving skills to the limit.
        </p>
        <p className="lilita-font text-outline-b1 text-white text-xl">
          With stunning graphics, realistic physics, and intuitive controls, our
          game puts you in the driver's seat of an extraordinary adventure.
          Unleash your inner speed demon, outmaneuver traffic with precision,
          and leave your rivals in the dust. Remember, in this race, only the
          bold prevail.
        </p>
      </div>
      <Carousel className="rounded-xl p-0 w-full carousel-height">
        <Image
          src="https://play-lh.googleusercontent.com/16YSx_KdzE-5_QJisejmvs5O3fDJbQPJIwbrhDFDZgYXaDsFzYtimU5nb2TuEW7qjFQ=w2560-h1440-rw"
          alt="image 1"
          width={1920}
          height={1080}
          className=" w-full h-full"
        />
        <Image
          src="https://play-lh.googleusercontent.com/eDL3xoMK7z-qp4rdRr7rIT1lbkQhxeCKt-6Q3r33_qMcyd4exRD5My2106VCjUH2vstb=w2560-h1440-rw"
          alt="image 2"
          width={1920}
          height={1080}
          className=" w-full h-full"
        />
        <Image
          src="https://play-lh.googleusercontent.com/tydnSdmhMYgiVzjmRY4a8I5nY1zwW1i285lOKn6crYEghNXIc_hZzQ7ga1_51yt0MIm9=w2560-h1440-rw"
          alt="image 3"
          width={1920}
          height={1080}
          className=" w-full h-full"
        />
        <Image
          src="https://play-lh.googleusercontent.com/figGb-54fUtU2NznlqrhNghQ-lAQv2kQbb7ffEK873Pz2f-TvGQL9IWbdTELjuQ-kB0=w2560-h1440-rw"
          alt="image 3"
          width={1920}
          height={1080}
          className=" w-full h-full"
        />
      </Carousel>
      <div className="w-full flex justify-center">
        <Link
          href="/games/highwayhavoc/privacypolicy"
          className=" text-white text-outline-b1 lilita-font text-lg"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default HighwayHavoc;
