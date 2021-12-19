import { useState, createContext } from "react";

export const PhotosContext = createContext();

export const PhotosProvider = (props) => {
  const [photos, setPhotos] = useState([{ name: "aaa" }, { name: "bbbb" }]);
  return (
    <PhotosContext.Provider value={[photos, setPhotos]}>
      {props.children}
    </PhotosContext.Provider>
  );
};
