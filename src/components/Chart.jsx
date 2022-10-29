import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Chart = ({ chart }) => {
  const navigate = useNavigate();

  const { addToUserCollection } = useAuthContext();

  const [like, setLike] = useState(false);

  const handleClick = () => {
    navigate(`/viewchart/${chart.id}`);
  };

  useEffect(() => {
    if (like) {
      addToUserCollection(chart);
    }
  }, [like, addToUserCollection, chart]);

  return (
    <div className="chart">
      <img onClick={handleClick} src={chart.cover} alt="reggae" />
      <div onClick={handleClick} className="label">
        <p className="title">{chart.title}</p>
        <p className="author">{chart.title.slice(0, -9)}</p>
        <p className="duration">{chart.files.length} Songs </p>
      </div>
      <div className="like">
        {like ? (
          <FaHeart
            onClick={() => setLike(false)}
            className="heart text-red-600"
          />
        ) : (
          <FaRegHeart onClick={() => setLike(true)} className="regheart" />
        )}
      </div>
    </div>
  );
};

export default Chart;
