import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/*" element={<Watch></Watch>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
