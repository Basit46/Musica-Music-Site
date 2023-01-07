import React, { useEffect } from "react";
import Chart from "./Chart";
import axios from "axios";
import { useSongsContext } from "../context/context";

const ChartContainer = () => {
  const { charts, setCharts, addChartsToSongs } = useSongsContext();

  useEffect(() => {
    axios
      .get("https://musica-api.onrender.com/playlist")
      .then((res) => {
        setCharts(res.data);
        addChartsToSongs(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [setCharts, addChartsToSongs]);
  return (
    <div className="h-full w-full md:w-fit">
      <h1 className="mb-[16px] md:mb-[14px] mt-[47px] md:mt-0 text-[#EFEEE0] text-[24px] font-[700]">
        Top Charts
      </h1>
      <div className="w-full overflow-x-scroll md:w-fit md:overflow-x-hidden">
        <div className="flex md:block w-fit">
          {charts &&
            charts
              .filter((chart, index) => index < 3)
              .map((chart) => <Chart key={chart.id} chart={chart} />)}
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
