import React from "react";
import VideoItem from "../components/VideoItem";
import { videos } from "../components/videoSource";

const Video = () => {
  return (
    <div className="fadeout px-[24px] md:pl-[8%] pt-[75px] md:pr-[59px] pb-[130px] h-full w-full overflow-y-scroll">
      <div className="flex justify-between flex-wrap">
        {videos.map((video, index) => (
          <VideoItem key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Video;
