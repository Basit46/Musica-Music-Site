import React from "react";
import { useSongsContext } from "../context/context";

const RowItems = ({ song }) => {
  const { getSongToPlay } = useSongsContext();
  return (
    <div onClick={() => getSongToPlay(song.id)} className="mr-[30px]">
      <div className="w-[153px] h-[153px] overflow-hidden rounded-[10px]">
        <img className="w-full h-full" src={song && song.cover} alt="rowpic" />
      </div>
      <p className="text-[12px] mt-[5px]">{song && song.title}</p>
    </div>
  );
};

export default RowItems;
