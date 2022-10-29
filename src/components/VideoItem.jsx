import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="md:flex w-full md:w-[48%] h-[300px] mb-[20px] border-gray-400 border-[2px] rounded-[20px] overflow-hidden">
      <img
        className="w-full md:w-fit mr-[0px] md:mr-[10px] h-full object-fill"
        src={video.strTrackThumb}
        alt={video.strTrack}
      />
      <div className="h-full">
        <h1 className="mb-[30px]">{video.strTrack}</h1>
        <a
          className="mt-[20px] bg-red-600 text-white font-bold p-2  "
          href={video.strMusicVid}
          target="blank"
        >
          WATCH ON YOUTUBE
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
