import React from "react";

const RadioItem = ({ radioitem }) => {
  return (
    <div className="h-[350px]">
      <img
        className="h-[90%] object-fit"
        src={radioitem.logo.s600x600}
        alt={radioitem.name}
      />
      <p className="h-[10%]">{radioitem.name}</p>
    </div>
  );
};

export default RadioItem;
