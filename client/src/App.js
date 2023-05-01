import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarRating from "./Components/StarRating";
import Submitted from "./Components/Submitted";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StarRating />} />
          <Route path="submitted" element={<Submitted />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
