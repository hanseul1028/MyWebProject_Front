import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Common/Footer/Footer"
import Header from "./component/Common/Header/Header";
import Nav from "./component/Common/Nav/Nav";
import Home from "./component/Common/Home/Home";
import Movies from "./component/Movie/Movies";
import MovieDetail from "./component/Movie/MovieDetail";
import Join from "./component/Member/Join/Join";
import Login from "./component/Member/Login/Login";
import { AuthContext } from "./component/Common/context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <Header />
        <br/><br/><br/><br/><br/>
        <Routes>
          <Route path="/" element={<Movies/>} />
          <Route path="/join" element={<Join/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path ="/*" element={<h1>존재하지 않는 페이지 요청입니다</h1>}/>
        </Routes>
        <Home />
        <Footer/>
      </Router>
    </>
  );
}
export default App;