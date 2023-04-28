import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarRating from "./Components/StarRating";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StarRating />}>
            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
