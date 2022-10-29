import React, { useEffect, useRef, useState } from "react";
import RowItems from "./RowItems";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import { useSongsContext } from "../context/context";

const Row = ({ title, url }) => {
  const { addSongsToList } = useSongsContext();

  const rowRef = useRef();
  const [returnedSongs, setreturnedSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://musica-api.up.railway.app/${url}`)
      .then((response) => {
        setreturnedSongs(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);

  useEffect(() => {
    addSongsToList(returnedSongs);
  }, [returnedSongs, addSongsToList]);

  const scrollingLeft = () => {
    const slide = rowRef.current;
    slide.scrollLeft = slide.scrollLeft - 300;
  };

  const scrollingRight = () => {
    const slide = rowRef.current;
    slide.scrollLeft = slide.scrollLeft + 300;
  };

  return (
    <div className="mb-[20px]">
      <p className="text-[24px] text-[#EFEEE0] mb-[13px]">{title}</p>

      <div className="relative group">
        <div
          onClick={scrollingLeft}
          className="hidden sm:group-hover:grid place-items-center absolute left-0 h-full bg-black w-[20px] "
        >
          <MdChevronLeft className="text-[25px]" />
        </div>

        <div
          ref={rowRef}
          className="flex max-w-[100%] overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {returnedSongs.map((song, index) => (
            <RowItems key={index} song={song} />
          ))}
        </div>

        <div
          onClick={scrollingRight}
          className="hidden sm:group-hover:grid place-items-center absolute right-0 top-0 h-full bg-black w-[20px]"
        >
          <MdChevronRight className="text-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default Row;
