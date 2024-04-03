import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-tr from-darkenGray to-darkenBlack py-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Mainlayout;
