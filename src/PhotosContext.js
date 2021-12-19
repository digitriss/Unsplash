import { useState, createContext } from "react";

export const PhotosContext = createContext();

export const PhotosProvider = (props) => {
  const [photos, setPhotos] = useState([]);
  return (
    <PhotosContext.Provider value={[photos, setPhotos]}>
      {props.children}
    </PhotosContext.Provider>
  );
};
