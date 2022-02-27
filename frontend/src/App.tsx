import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

function App() {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home></Home> : <Register></Register>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={!user ? <Login></Login> : <Home></Home>}></Route>
        <Route path="/series" element={user? <Home type={"series"}></Home> : <Login></Login>}></Route>
        <Route path="/movies" element={user? <Home type={"movie"}></Home> : <Login></Login>}></Route>
        <Route path="/watch" element={user? <Watch></Watch> : <Login></Login>}></Route>
        <Route path="/*" element={<Login></Login>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
