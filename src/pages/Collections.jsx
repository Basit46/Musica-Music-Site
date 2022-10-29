import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const navigate = useNavigate();

  const [onCollection, setOnCollection] = useState(true);
  return (
    <div className="fadeout px-[24px] md:pl-[8%] pt-[75px] pb-[130px] h-full w-full overflow-y-scroll">
      <div className="flex items-center space-x-[10px] w-full md:w-fit">
        <div
          onClick={() => {
            navigate("/collections");
            setOnCollection(true);
          }}
          className={`${
            onCollection && "bg-[#FACD66]"
          } w-[48%] md:w-fit rounded-[27px] px-[17.5px] py-[10px] text-white text-[14px] border-[1px] border-[wheat] grid place-items-center cursor-pointer`}
        >
          My Collection
        </div>
        <div
          onClick={() => {
            navigate("/collections/likes");
            setOnCollection(false);
          }}
          className={`${
            !onCollection && "bg-[#FACD66]"
          } w-[48%] md:w-fit rounded-[27px] px-[16px] py-[8.5px] text-white text-[14px] border-[1px] border-[wheat] grid place-items-center cursor-pointer`}
        >
          Likes
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Collections;
