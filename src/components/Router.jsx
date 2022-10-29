import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Collections from "../pages/Collections";
import Radio from "../pages/Radio";
import Video from "../pages/Video";
import Profile from "../pages/Profile";
import ViewChart from "../pages/ViewChart";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import UserCollectionsSection from "../components/UserCollectionsSection";
import UserLIkesSection from "./UserLIkesSection";
import RequireAuth from "../page-protection/RequireAuth";

const Router = () => {
  return (
    <div className="relative bg-none w-full h-full text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewchart/:chartId" element={<ViewChart />} />
        <Route
          path="collections"
          element={
            <RequireAuth>
              <Collections />
            </RequireAuth>
          }
        >
          <Route path="" element={<UserCollectionsSection />} />
          <Route path="likes" element={<UserLIkesSection />} />
        </Route>
        <Route path="/radio" element={<Radio />} />
        <Route path="/video" element={<Video />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          path="*"
          element={
            <h1 className="font-extrabold text-[5rem] pl-[300px] pt-[250px]">
              page does not exist
            </h1>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
