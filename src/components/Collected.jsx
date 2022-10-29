import React from "react";
import { FaPlay, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Collected = ({ collected }) => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full md:w-[213px] h-[234px] group overflow-hidden rounded-[20px] mr-[20px] mb-[20px] ">
      <img
        className="group-hover:scale-[1.2] object-cover duration-200 h-full w-full"
        src={collected.img}
        alt="collection pic"
      />
      <div className="absolute left-[19px] duration-200 bottom-0 md:bottom-[-30px] group-hover:bottom-[0px]">
        <p className="text-[24px] text-black font-bold mb-[2px]">
          {collected.title}
        </p>
        <p className="text-[10px] text-black font-bold mb-[10px]">
          {collected.title.slice(0, -9)}
        </p>
        <p className="text-[16px] text-black font-bold mb-[10px]">2.5m Likes</p>
      </div>

      <div className="md:hidden grid group-hover:grid place-items-center duration-200 absolute right-[30px] bottom-[30px] h-[40px] w-[40px] bg-[#FACD66]/50 rounded-full">
        <FaPlay
          onClick={() => navigate(`/viewchart/${collected.id}`)}
          className=" text-[#FACD66]"
        />
      </div>
    </div>
  );
};

export default Collected;
