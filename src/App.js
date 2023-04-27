import Home from "./Components/Home";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Create from "./Components/Create";
import Signup from "./Components/Signup";

function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/Create" element = {<Create/>} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
