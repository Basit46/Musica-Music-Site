import React from "react";
import { useSongsContext } from "../context/context";
import useImg from "../Images/Lead-image.png";

const SearchedSong = ({ song }) => {
  const { getSongToPlay, setSearchedSong, searchInputRef } = useSongsContext();

  const handleClick = () => {
    getSongToPlay(song.id);
    setSearchedSong([]);
    searchInputRef.current.value = "";
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center border-b-[2px] border-white w-[300px] mt-[10px] pb-[4px] cursor-pointer"
    >
      <img className="w-[40px] h-[40px] mr-[10px]" src={useImg} alt={"asae"} />
      <h1>
        <span className="font-bold">{song.artist}</span> -{" "}
        <span>{song.title}</span>
      </h1>
    </div>
  );
};

export default SearchedSong;
