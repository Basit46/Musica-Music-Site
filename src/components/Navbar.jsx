import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";
import { TbRadio, TbLogout } from "react-icons/tb";
import { IoMdFilm } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useSongsContext } from "../context/context";
import { logoSvg } from "../Images/logo";

const Navbar = () => {
  const { logOut } = useAuthContext();
  const { openMenu, setOpenMenu } = useSongsContext();

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const handleLogOut = async () => {
    await logOut();
    closeMenu();
  };
  return (
    <div
      className={`navbar fixed ${
        openMenu ? "left-0" : "left-[-100%]"
      }  duration-200 b-main md:bg-transparent w-screen md:left-0 top-0 h-full md:w-[7%] flex flex-col md:items-center justify-start`}
    >
      <div className="hidden md:block mt-[20px]">{logoSvg}</div>
      <div className="w-full md:w-fit mt-[70px] md:mt-[40px] mb-[20px] py-[26px] px-[17px] space-y-[39px] bg-[#1A1E1F] md:rounded-[32px] text-white">
        <div>
          <NavLink onClick={closeMenu} className="flex items-center" to="/" end>
            <MdHomeFilled />
            <p className="md:hidden ml-[30px] text-[17px]">Home</p>
          </NavLink>
        </div>

        <div>
          <NavLink
            onClick={closeMenu}
            className="flex items-center"
            to="/collections"
          >
            <BsCollectionPlayFill />
            <p className="md:hidden ml-[30px] text-[17px]">My Collections</p>
          </NavLink>
        </div>

        <div>
          <NavLink
            onClick={closeMenu}
            className="flex items-center"
            to="/radio"
          >
            <TbRadio />
            <p className="md:hidden ml-[30px] text-[17px]">Radio</p>
          </NavLink>
        </div>

        <div>
          <NavLink
            onClick={closeMenu}
            className="flex items-center"
            to="/video"
          >
            <IoMdFilm />
            <p className="md:hidden ml-[30px] text-[17px]">Music Videos</p>
          </NavLink>
        </div>
      </div>

      <div className="w-full md:w-fit py-[26px] px-[17px] space-y-[39px] bg-[#1A1E1F] md:rounded-[32px] text-white">
        <div>
          <NavLink
            onClick={closeMenu}
            className="flex items-center"
            to="/profile/signup"
          >
            <BiUser />
            <p className="md:hidden ml-[30px] text-[17px]">Profile</p>
          </NavLink>
        </div>

        <div>
          <li className="list-none flex" onClick={handleLogOut}>
            <TbLogout className="text-[#EFEEE0] h-[18px] w-[18px]" />
            <p className="md:hidden ml-[30px] text-[17px]">LogOut</p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
