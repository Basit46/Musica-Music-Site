import React, { useState, useEffect } from "react";
import Collected from "../components/Collected";
import { db } from "../firebase";
import { useAuthContext } from "../context/authContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

const UserCollectionsSection = () => {
  const { user } = useAuthContext();

  const [collections, setCollections] = useState(null);

  const handleDelete = async (id) => {
    await setCollections(
      collections.filter((collectionItems) => collectionItems.id !== id)
    );
    console.log(collections);
  };

  // useEffect(() => {
  //   updateDoc(doc(db, "users", user), {
  //     collection: collections,
  //   });
  // }, [collections, user]);

  useEffect(() => {
    onSnapshot(doc(db, "users", user), (doc) => {
      setCollections(doc.data().collection);
    });
  }, [user]);

  return (
    <div className="mt-[23px] flex flex-wrap">
      {collections &&
        collections.map((collected) => (
          <Collected
            key={collected.id}
            collected={collected}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default UserCollectionsSection;
