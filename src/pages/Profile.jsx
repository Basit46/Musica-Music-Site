import React from "react";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="fadeout md:pl-[8%] pt-[75px] md:pr-[59px] pb-[130px] h-full w-full overflow-y-scroll grid place-items-center">
      <Outlet />
    </div>
  );
};

export default Profile;
