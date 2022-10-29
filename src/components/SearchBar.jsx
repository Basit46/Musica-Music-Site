import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSongsContext } from "../context/context";
import SearchedSong from "./SearchedSong";
import { useLocation } from "react-router-dom";
import { logoSvg } from "../Images/logo";

const SearchBar = () => {
  const { searchInputRef } = useSongsContext();
  const location = useLocation();
  const { searchedSong, getSearchedSong, setOpenMenu } = useSongsContext();

  if (location.pathname.includes("/viewchart/") && window.innerWidth > 500) {
    return;
  } else {
    return (
      <div className="w-[100%] md:w-[93%] absolute top-0 left-0 md:left-[7%] h-fit bg-main flex items-center">
        <div className="md:hidden w-[30%] md:w-[0%] mt-2 pl-[17px] md:pl-[0px] flex items-center">
          <div
            onClick={() => setOpenMenu((prev) => !prev)}
            className=" text-white mr-[20px]"
          >
            <div className="border-white border-[2px] w-[30px] mb-[10px]"></div>
            <div className="border-white border-[2px] w-[30px]"></div>
          </div>
          <div>{logoSvg}</div>
        </div>

        <div className="w-[70%] md:w-[100%] h-[73px] flex items-center px-[28px] py-[20px]">
          <FaSearch className="hidden md:block mr-[25px] text-white w-[15px] h-[15px]" />
          <input
            onChange={() => getSearchedSong(searchInputRef.current.value)}
            ref={searchInputRef}
            className=" bg-transparent outline-none text-white w-full"
            type="text"
            placeholder="Search artists"
          />
          <FaSearch className="block md:hidden mr-[10px] text-white w-[25px] h-[25px]" />
        </div>

        <div className="text-white absolute top-[75px] left-[20px] pl-[66px] max-h-[300px] overflow-hidden bg-green-600">
          {searchedSong &&
            searchedSong.map((song, index) => (
              <SearchedSong song={song} key={index} />
            ))}
        </div>
      </div>
    );
  }
};

export default SearchBar;
