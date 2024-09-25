import React from "react";

export interface Props {
  title: string;
}

const SectionHeader = (props: Props) => {
  return (
    <div
      className={`h-[135px] bg-[url("/headbg1.webp")] bg-no-repeat bg-center flex items-center justify-center text-[36px] font-bold  mb-10`}
    >
      {props.title}
    </div>
  );
};

export default SectionHeader;
