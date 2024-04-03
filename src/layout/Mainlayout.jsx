import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-r from-darkenGray to-darkenBlack">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Mainlayout;
