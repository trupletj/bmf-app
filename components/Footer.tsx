import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className='relative top-0 left-0 w-full  bg-[url("/footer.png")] flex flex-col items-center justify-center font-montserrat-black'>
      {/* Footer container */}
      <footer className="container py-20 flex flex-col gap-6">
        <div className="flex items-center justify-center lg:justify-between">
          <div className="w-1/2">
            <Image src="/logo1.png" alt="logo1" width={260} height={132} />
          </div>
          <div className="w-1/2">
            <Image
              src="/footerword.png"
              alt="footerword"
              width={540}
              height={122}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-28 sm:grid-cols-3 border-b-4 border-primary pb-5">
          <div className="text-[22px] flex flex-col items-start justify-end">
            <p className="font-bold text-[24px]">ХОЛБОО БАРИХ МЭДЭЭЛЭЛ</p>
            Монгол улс, Хөвсгөл аймаг-67043,
            <br /> Цагаан-Үүр сум, 4-р баг
          </div>
          <div className="flex flex-col items-start justify-end">
            <p className="text-[20px]">
              (976) 88101873, (976) 99025895 bayalagmeatfoods@gmail.com
            </p>
          </div>

          <div className=" flex items-end justify-end">
            <Image
              src="/Footer icons.png"
              alt="Footer icons"
              width={260}
              height={132}
            />
          </div>
        </div>


        <div className=" flex  text-center justify-between">
          <div className="text-base">
            @2023 Bayalag meat foods LLC. Бүх эрх хуулиар хамгаалагдсан.
          </div>
          <div className="text-xl font-bold">ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ</div>
          <div className="text-xl font-bold">НУУЦЛАЛЫН БОДЛОГО</div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
