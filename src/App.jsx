import {} from "react";
import Finder from "../Finder";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Finder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
