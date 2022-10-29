import React from "react";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import SearchBar from "./components/SearchBar";
import Router from "./components/Router";
function App() {
  return (
    <div className="relative h-screen  w-screen bg-main ">
      <div className="relative h-full w-full">
        <Router />
        <Navbar />
        <SearchBar />
      </div>
      <Player />
    </div>
  );
}

export default App;
