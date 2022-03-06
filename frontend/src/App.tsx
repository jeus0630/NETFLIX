import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

function App() {
  const user = false;

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home></Home> : <Navigate replace to="/login"></Navigate>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={!user ? <Login></Login> : <Navigate replace to="/login"></Navigate>}></Route>
        <Route path="/series" element={user ? <Home type={"series"}></Home> : <Navigate replace to="/login"></Navigate>}></Route>
        <Route path="/movies" element={user ? <Home type={"movie"}></Home> : <Navigate replace to="/login"></Navigate>}></Route>
        <Route path="/watch" element={user ? <Watch></Watch> : <Navigate replace to="/login"></Navigate>}></Route>
        <Route path="/*" element={<Login></Login>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
