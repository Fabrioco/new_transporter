import { Routes, Route } from "react-router-dom";

import Private from "./Private";

import Home from "../pages/Home";
import LogIn from "../pages/SignIn";
import Register from "../pages/SignUp";
import Reset from "../pages/Reset";
import Mail from "../pages/Mail";

import Header from "../components/Header";

import Data from "../pages/subpages/Data";
import FeedBack from "../pages/subpages/FeedBack";
import Cart from "../pages/subpages/Cart";

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<Reset />} />

        <Route
          path="/mail"
          element={
            <Private>
              <Mail />
            </Private>
          }
        />
        <Route
          path="/data"
          element={
            <Private>
              <Data />
            </Private>
          }
        />
        <Route
          path="/feedback"
          element={
            <Private>
              <FeedBack />
            </Private>
          }
        />
        <Route
          path="/cart"
          element={
            <Private>
              <Cart />
            </Private>
          }
        />
      </Routes>
    </>
  );
}
