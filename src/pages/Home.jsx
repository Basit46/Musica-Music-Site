import React from "react";
import manpic from "../Images/man.png";
import artdesign from "../Images/art.png";
import likespic from "../Images/likes.png";
import Row from "../components/Row.jsx";
import ChartContainer from "../components/ChartContainer";

const Home = () => {
  return (
    <div className="fadeout px-[24px] md:pl-[8%] pt-[75px] md:pr-[59px] pb-[130px] h-fit w-full bg-main">
      <div className="h-fit md:h-[373px] w-full md:flex justify-between items-center">
        <div className="relative w-full md:w-[686px] h-full bg-[#609EAF] rounded-[20px] md:rounded-[40px] overflow-hidden">
          <img
            className="art absolute top-[10px]  h-[100%] w-[1115.62px]"
            src={artdesign}
            alt="art"
          />
          <div className="h-full w-full flex justify-between">
            <div className="h-full px-[45px] py-[38px]">
              <p className="text-[12px]">Currated playlist</p>
              <h1 className="mt-[85px] mb-[6px] text-[35px] font-[700]">
                R & B Hits
              </h1>
              <p className="text-[14px] mb-[50px]">
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>
              <img src={likespic} alt="likes" />
            </div>

            <img className="hidden md:block z-[999]" src={manpic} alt="man" />
          </div>
        </div>

        <ChartContainer />
      </div>

      <div className="mt-[43px]">
        <Row title={"New Releases"} url={"new"} />
        <Row title={"Naija Vibes"} url={"popular"} />
      </div>
    </div>
  );
};

export default Home;
