import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { db } from "../firebase";
import { useAuthContext } from "../context/authContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useSongsContext } from "../context/context";

const ChartTrack = ({ charttrack, index }) => {
  const { user } = useAuthContext();
  const { chartToBeViewed, songs, setSongs, setCurrentSong } =
    useSongsContext();

  const [like, setLike] = useState(false);

  useEffect(() => {
    if (like) {
      updateDoc(doc(db, "users", user), {
        likes: arrayUnion({
          id: charttrack.id,
          title: charttrack.title,
          cover: charttrack.cover,
        }),
      });
    }
  }, [like]);

  const handleClick = async () => {
    await setSongs([...chartToBeViewed.files]);
    setCurrentSong(songs[index]);
  };
  return (
    <div
      onClick={handleClick}
      className="h-[56px] w-full mb-[10px] rounded-[15px] bg-[#33373B]/[37%] backdrop-blur-[4px] flex justify-between items-center px-[10px]"
    >
      <div className="w-[30%] md:w-[15%]">
        <img
          className="h-[39px] w-[39px]"
          src={charttrack.cover}
          alt="chart song"
        />
      </div>
      <div className="hidden md:block md:w-[5%]">
        {like ? (
          <FaHeart
            onClick={() => setLike(false)}
            className="ml-[20px] mr-[82px] text-red-600"
          />
        ) : (
          <FaRegHeart
            onClick={() => setLike(true)}
            className="ml-[20px] mr-[82px]"
          />
        )}
      </div>
      <p className="w-[70%] md:w-[40%] text-center">
        {charttrack.title} ~ {charttrack.artist}
      </p>
      <p className="hidden md:block w-[25%]">Single</p>
      <p className="hidden md:block w-[10%]">4:17</p>
      <p className="hidden md:block text-[#241e10] font-extrabold w-[5%]">:</p>
    </div>
  );
};

export default ChartTrack;
