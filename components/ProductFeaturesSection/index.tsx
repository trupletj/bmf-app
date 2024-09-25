import React from "react";
import Image from "next/image";
import SectionHeader from "../SectionHeader";

const ProductFeaturesSection = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="container flex flex-col items-center gap-3">
        <SectionHeader title="БҮТЭЭГДЭХҮҮНИЙ ОНЦЛОГ" />
        <div className='w-full relative aspect-[16/8] bg-[url("/subtract.webp")] bg-no-repeat bg-center bg-bottom'>
          <div className="absolute bottom-[15%] left-[0%] w-[200px] flex flex-col items-center gap-2 text-center">
            <div className="relative w-[185px] h-[166px] ">
              <Image src={"/organic-icon.webp"} fill alt="organic" />
            </div>
            <div className="font-bold uppercase text-2xl">100% Органик</div>
            <p className="text-center px-3">
              Хөвсгөл аймгийн Цагаан-Үүр суманд өсгөн бойжуулсан, эрүүл
              бэлчээрийн үхэр сүрэг
            </p>
          </div>
          {/* health */}
          <div className="absolute top-[0%] left-[25%] w-[200px] flex flex-col items-center gap-2 text-center">
            <div className="relative w-[185px] h-[166px] ">
              <Image src={"/health-icon.webp"} fill alt="health" />
            </div>
            <div className="font-bold uppercase text-2xl">
              Эрүүл мэндэд тустай
            </div>
            <p className="text-center px-3">
              Борц нь уламжлалт хүнс төдийгүй эрүүл мэндэд мөн тустай хүнс юм.
            </p>
          </div>
          {/* safety */}
          <div className="absolute top-[0%] right-[25%] w-[200px] flex flex-col items-center gap-2 text-center">
            <div className="relative w-[185px] h-[166px] ">
              <Image src={"/safety-icon.webp"} fill alt="safety" />
            </div>
            <div className="font-bold uppercase text-2xl ">
              Аюулгүй эрүүл хүнс
            </div>
            <p className="text-center px-3">
              Гарал үүслийн бичигтэй, эрүүл ахуйн шаардлага хангасан.
            </p>
          </div>
          {/* fresh */}
          <div className="absolute bottom-[15%] right-[0%] w-[200px] flex flex-col items-center gap-2 text-center">
            <div className="relative w-[185px] h-[166px] ">
              <Image src={"/fresh-icon.webp"} fill alt="organic" />
            </div>
            <div className="font-bold uppercase text-2xl">Үргэлж шинэ</div>
            <p className="text-center px-3">
              Таны ажлыг хөнгөвчилж, үргэлж шинээр нь хүргэх болно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeaturesSection;
