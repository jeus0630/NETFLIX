import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import "./app.scss";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Movies from './pages/movies/Movies';
import Movie from './pages/movie/Movie';
import NewMovie from './pages/newProduct/NewProduct';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import { RootState } from './redux/store';
import { useSelector } from "react-redux";

function App() {

  const isLogIn = useSelector((state: RootState) => state.login.isLogIn);

  return (
    <Router>
      <div>
        <Topbar></Topbar>
        <div className="container">
          <Sidebar></Sidebar>
          {
            isLogIn ? (
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Home></Home>}></Route>
                <Route path="/users" element={<UserList></UserList>}></Route>
                <Route path="/user/:id" element={<User></User>}></Route>
                <Route path="/new-user" element={<NewUser></NewUser>}></Route>
                <Route path="/movies" element={<Movies></Movies>}></Route>
                <Route path="/movie/:id" element={<Movie></Movie>}></Route>
                <Route path="/new-movie" element={<NewMovie></NewMovie>}></Route>
                <Route path="/*" element={<NotFound></NotFound>}></Route>
              </Routes>
            ) : (
              <Routes>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/*" element={<Navigate replace to="/login"></Navigate>}></Route>
              </Routes>
            )
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
