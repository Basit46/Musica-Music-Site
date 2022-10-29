import React, { useEffect, useState } from "react";
import RadioItem from "../components/RadioItem";
import axios from "axios";

const Radio = () => {
  const [radioItems, setRadioItems] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://50k-radio-stations.p.rapidapi.com/get/channels",
      params: { keyword: "a", country_id: "1", page: "1" },
      headers: {
        "X-RapidAPI-Key": "027b4e223cmshf5ee3e05015b90fp1b780bjsn09ab8f5ed4c9",
        "X-RapidAPI-Host": "50k-radio-stations.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setRadioItems(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="listgrid fadeout pl-[8%] pt-[75px] pr-[59px] pb-[130px] h-full w-full overflow-y-scroll">
      {radioItems &&
        radioItems.map((radioitem, index) => (
          <RadioItem key={index} radioitem={radioitem} />
        ))}
    </div>
  );
};

export default Radio;
