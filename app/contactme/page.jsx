"use client";
import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
const page = () => {
  return (
    <div className="w-full">
      <p className=" text-center w-full text-outline-b2 text-8xl lilita-font text-white py-10">
        Contact Me
      </p>
      <div className="flex w-full mb-6 justify-center items-center">
        <div className="flex w-full md:w-full lg:w-1/2 gap-4 flex-col">
          <Card color="white"  className="p-4 mb-8" shadow={true}>
            <form className="mt-8 mb-2 w-full ">
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="h4"
                  color="black"
                  className="-mb-3 lilita-font"
                >
                  Your Name
                </Typography>
                <Input
                  className="bg-white lilita-font px-3"
                  label="Your Name"
                />
                <Typography
                  variant="h4"
                  color="black"
                  className="-mb-3 lilita-font"
                >
                  Your Email
                </Typography>
                <Input
                  className="bg-white lilita-font px-3"
                  label="Your Email"
                />
                <Typography
                  variant="h4"
                  color="black"
                  className="-mb-3 lilita-font"
                >
                  Message
                </Typography>
                <Textarea
                  className="bg-white lilita-font px-3"
                  label="Message"
                />
              </div>

              <Button className="mt-6 lilita-font text-xl" fullWidth>
                Send
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
