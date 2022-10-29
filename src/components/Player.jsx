import React, { useEffect, useRef } from "react";
import { IoIosShuffle } from "react-icons/io";
import { GiPreviousButton, GiNextButton, GiSpeaker } from "react-icons/gi";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbRepeatOnce } from "react-icons/tb";
import { useSongsContext } from "../context/context";

const Player = () => {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    getNextSong,
    getPreviousSong,
    repeatSong,
    setRepeatSong,
    audioRef,
    isOnShuffle,
    setIsOnShuffle,
  } = useSongsContext();

  const seekRef = useRef();
  const volumeRef = useRef();
  const seekTrackRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef, currentSong]);

  const setSeek = () => {
    seekRef.current.style.width =
      (audioRef.current.currentTime / audioRef.current.duration) * 100 + "%";

    if (audioRef.current.currentTime === audioRef.current.duration) {
      setNextSong();
    }
  };

  const setNextSong = () => {
    getNextSong(currentSong.id);
  };

  const setPrevSong = () => {
    getPreviousSong(currentSong.id);
  };

  const handleShuffle = () => {
    setIsOnShuffle(!isOnShuffle);
  };

  const setProgress = (e) => {
    const width = seekTrackRef.current.clientWidth;
    const clickedPoint = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;

    audioRef.current.currentTime = (clickedPoint / width) * duration;
  };

  const handleVolume = (e) => {
    const max = 100;
    const clickedPoint = e.target.valueAsNumber;

    audioRef.current.volume = clickedPoint / max;
  };

  return (
    <div className="player flex justify-around items-center md:items-start md:pt-[33.33px] absolute bottom-0 left-0 w-full h-[125px] backdrop-blur-[60px] border-t-[2px] border-white ">
      <div className="flex items-center pl-[30px] md:pl-[0px] w-[50%] md:w-[15%]">
        <img
          className="w-[57px] h-[57px] md:w-[49px] md:h-[49px] rounded-[14px] mr-[13px]"
          src={currentSong?.cover}
          alt="music logo"
        />
        <div>
          <p className="text-[14px] text-white mb-[3px]">
            {currentSong?.title}
          </p>
          <p className="text-white text-[10px]">{currentSong?.artist}</p>
        </div>
      </div>

      <div className="w-[50%] md:w-[60%] flex flex-col items-center ">
        <audio
          onTimeUpdate={setSeek}
          ref={audioRef}
          src={currentSong?.audio}
        ></audio>

        <div className="flex items-center md:items-start mr-[15px] md:mr-[0px] space-x-[20px] md:space-x-[44px] w-fit text-white ">
          <IoIosShuffle
            onClick={handleShuffle}
            className={`hidden md:inline w-[20px] h-[20px] ${
              isOnShuffle && "text-[#FACD66]"
            }`}
          />
          <GiPreviousButton
            onClick={setPrevSong}
            className="w-[30px] h-[30px] md:w-auto md:h-auto"
          />
          <div className="h-[40px] w-[40px] md:h-[25px] md:w-[25px] rounded-full bg-[#FACD66] grid place-items-center">
            {!isPlaying && <FaPlay onClick={() => setIsPlaying(true)} />}
            {isPlaying && <FaPause onClick={() => setIsPlaying(false)} />}
          </div>
          <GiNextButton
            onClick={setNextSong}
            className="w-[30px] h-[30px] md:w-auto md:h-auto"
          />
          <TbRepeatOnce
            className={`hidden md:inline ${repeatSong && "text-[#FACD66]"}`}
            onClick={() => setRepeatSong((prev) => !prev)}
          />
        </div>

        <div className="hidden md:block relative mt-[31px] w-full h-fit">
          <div
            ref={seekTrackRef}
            onClick={(e) => setProgress(e)}
            className="absolute left-0 w-full h-[4px] bg-white/40"
          ></div>
          <div
            ref={seekRef}
            className="absolute left-0 w-[0%] duration-100 h-[4px] flex items-center"
          >
            <div className="relative h-full w-full">
              <div
                onClick={(e) => setProgress(e)}
                className="h-[4px] w-full bg-[#FACD66]"
              ></div>
              <div className="absolute right-[-4px] top-[50%] -translate-y-1/2 w-[13px] h-[13px] bg-[#FACD66] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center h-fit w-[15%]">
        <label htmlFor="volume">
          <GiSpeaker className="text-white mr-[2.5px]" />
        </label>
        <input
          ref={volumeRef}
          onChange={(e) => handleVolume(e)}
          className="volume w-[160px] mb-[4px]"
          type="range"
          name="volume"
        />
      </div>
    </div>
  );
};

export default Player;
