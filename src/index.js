import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Mainpage from "./pages/Mainpage";
import Header from "./Components/Header";
import Nav from "./Components/Nac";
import MovieDetail from "./pages/MovieDetail";
import Loginpage from "./pages/Loginpage";
import Reserveration from "./pages/Reserveration";
import Signuppage from "./pages/Signuppage";
import VerificationCode from "./pages/VerificationCode";
import Contactpage from "./pages/Contactpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Nav/>
    <Routes>
      <Route path="/" element={<Mainpage/>}></Route>
      <Route path="/:movieId" element={<MovieDetail/>}></Route>
      <Route path="/pages/Loginpage" element={<Loginpage/>}></Route>
      <Route path="/pages/Signuppage" element={<Signuppage/>}></Route>
      <Route path="/pages/VerificationCode/:username" element={<VerificationCode/>}></Route>
      <Route path="/pages/Reserveration" element={<Reserveration/>}></Route>
      <Route path="/pages/Contactpage" element={<Contactpage/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
