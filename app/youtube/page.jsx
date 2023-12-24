"use client";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <p className=" text-center w-full text-outline-b2 text-8xl lilita-font text-white py-10">
        My Videos
      </p>
        <div className="w-full grid  lg:grid-cols-3 h-auto md:grid-cols-2 grid-cols-1 gap-3">
          <div className="flex w-full flex-col">
            <iframe
              className="w-full aspect-video "
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FbgU1w1RoDI?si=MUlvjXDA4029sFVe"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="lilita-font text-white text-outline-b1 text-3xl">Making a Takeshi Castle Game</p>
          </div>
          <div className="flex w-full flex-col">
            <iframe
              width="560"
              className="w-full aspect-video"
              height="315"
              src="https://www.youtube.com/embed/5W7xI40ajZI?si=49JCbF6jx2t-_xsz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="lilita-font text-white text-outline-b1 text-3xl">Making a Open World GTA Game</p>
          </div>
          <div className="flex w-full flex-col">
            <iframe
              width="560"
              className="w-full aspect-video"
              height="315"
              src="https://www.youtube.com/embed/ot6g9lW85DY?si=3OLVbX8574ngec7Z"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="lilita-font text-white text-outline-b1 text-3xl">Highway Havoc Trailer</p>
          </div>
      </div>
    </div>
  );
};

export default page;
