import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createApi } from "unsplash-js";
import { Galerry } from "./Galerry";
import "./Home.css";
import { PhotosContext } from "./PhotosContext";

export const Home = () => {
  const [query, setQuery] = useState("");

  let navigate = useNavigate();
  const [photos, setPhotos] = useContext(PhotosContext);
  const api = createApi({
    accessKey: "0WwklJ4q3CbfXUvSY35uuiyK5pJQqbHJZRbqedeFUU8",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/galerry");
  };
  useEffect(() => {
    api.search
      .getPhotos({ query: query })
      .then((data) => {
        console.log(data.response.result, "aaaa");
        setPhotos(data.response.results);
        console.log(photos, "photos");
      })
      .catch(() => console.log("dupa"));
  }, [query]);
  //2 sposob zapisu pobierania danych z api
  // useEffect(() => {
  // fetch("https://api.unsplash.com/photos/random?client_id=${clientId}")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     this.setState({ imgs: data });
  //   })
  //   .catch((err) => {
  //     console.log("Error happened during fetching!", err);
  //   });
  // }, []);

  return (
    <div className="home">
      {/* <div>{photos}</div> */}
      <h1>Unsplash</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search free hight-resolution photo"
        />
        {/* {data !== null && <Galerry photos={data} />} */}
      </form>
    </div>
  );
};
