import { useContext } from "react";
import { PhotosContext } from "./PhotosContext";

export const Galerry = ({}) => {
  const [photos, setPhotos] = useContext(PhotosContext);
  return (
    <div>
      test
      <ul>
        {photos.map((el) => (
          <li key={el.id}>
            <img src={el.urls.regular} />
            <a></a>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
