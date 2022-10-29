import React, { useEffect } from "react";
import playall from "../Images/playall.png";
import addtocol from "../Images/addtocol.png";
import love from "../Images/love.png";
import ChartTrack from "../components/ChartTrack";
import { useSongsContext } from "../context/context";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const ViewChart = () => {
  const { chartId } = useParams();

  const { addToUserCollection } = useAuthContext();
  const {
    chartToBeViewed,
    getChartToBeViewed,
    songs,
    setSongs,
    setCurrentSong,
  } = useSongsContext();

  useEffect(() => {
    getChartToBeViewed(chartId);
  }, [chartId, getChartToBeViewed]);

  useEffect(() => {
    handlePlayPlaylist();
  }, [chartToBeViewed]);

  const handlePlayPlaylist = async () => {
    await setSongs([...chartToBeViewed.files]);
    setCurrentSong(songs[0]);
  };
  return (
    <div className="fadeout relative h-full w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="h-full w-full relative">
          <img
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={chartToBeViewed?.cover}
            alt="lead Img"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-main/50 "></div>
          <div className="gradient absolute top-0 left-0 h-full w-full"></div>
        </div>
      </div>

      <div className="absolute top-0 left-0 h-full w-full overflow-y-scroll px-[24px] md:pl-[8%] md:pr-[50px] pt-[75px] pb-[130px]">
        <div className="md:flex items-end">
          <img
            className="md:mr-[27px] h-[350px] w-[350px] mt-[20px] md:mt-0 rounded-[25px]"
            src={chartToBeViewed?.cover}
            alt="albumImg logo"
          />

          <div className="mb-[20px]">
            <h1 className="font-[700] text-[35px] text-[#A4C7C6]">
              {chartToBeViewed?.title}
            </h1>
            <p className="my-[10px] text-[14px] text-[#EFEEE0]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <p className="text-[14px] text-[#EFEEE0] mb-[40px]">
              {chartToBeViewed?.files.length} songs ~{" "}
              {chartToBeViewed?.files.length * 0.03} hrs+
            </p>

            <div className="flex space-x-[9px]">
              <img
                onClick={() => handlePlayPlaylist()}
                src={playall}
                alt="playall"
              />
              <img
                onClick={() => addToUserCollection(chartToBeViewed)}
                src={addtocol}
                alt="addtocol"
              />
              <img src={love} alt="love" />
            </div>
          </div>
        </div>

        <div className="mt-[50px]">
          {chartToBeViewed &&
            chartToBeViewed.files.map((charttrack, index) => (
              <ChartTrack
                key={charttrack.id}
                charttrack={charttrack}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ViewChart;
