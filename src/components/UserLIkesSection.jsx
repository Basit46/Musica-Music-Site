import React, { useEffect, useState } from "react";
import RowItems from "./RowItems";
import { db } from "../firebase";
import { onSnapshot, doc } from "firebase/firestore";
import { useAuthContext } from "../context/authContext";

const UserLIkesSection = () => {
  const { user } = useAuthContext();

  const [likedSongs, setLikedSongs] = useState(null);
  useEffect(() => {
    onSnapshot(doc(db, "users", user), (doc) => {
      setLikedSongs(doc.data().likes);
    });
  }, [user]);
  return (
    <div className="flex flex-wrap justify-center md:justify-start space-y-[20px] md:space-y-0 mt-[20px]">
      {likedSongs &&
        likedSongs.map((song, index) => <RowItems key={index} song={song} />)}
    </div>
  );
};

export default UserLIkesSection;
