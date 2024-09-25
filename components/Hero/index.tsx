import React from "react";
import Bg from "@/assets/bghero.webp";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className='relative top-0 left-0 w-full h-screen bg-[url("/bghero.webp")] flex items-center justify-center font-montserrat-black'>
      <div className="container h-full pt-40 flex items-center justify-between">
        <div className="w-1/2 px-20 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="text-[24px]">
              <span className="font-bold">уриншуулж</span> хатаасан
            </div>
            <div className="text-[64px] font-bold uppercase leading-[70px]">
              үхрийн махан борц
            </div>
          </div>

          <div className="font-light text-[20px]">
            эрүүл бэлчээрийн, гарал үүсэл тодорхой, эрүүл ахуйн шаардлага
            хангасан үхрийн махан борц
          </div>
          <div className="">
            <Button>ЗАХИАЛГА ӨГӨХ</Button>
          </div>
        </div>
        <div className='w-1/2 bg-[url("/Borst.webp")] h-full bg-center bg-no-repeat '></div>
      </div>
    </div>
  );
};

export default Hero;
