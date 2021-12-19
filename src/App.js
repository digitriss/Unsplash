import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Galerry } from "./Galerry";
import { PhotosProvider } from "./PhotosContext";

function App() {
  return (
    <PhotosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/galerry" element={<Galerry />}></Route>
        </Routes>
      </Router>
    </PhotosProvider>
  );
}

export default App;
