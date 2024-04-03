import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const Mainlayout = ({ modalD, setModalD, mT, setMt }) => {
  return (
    <>
      <Header modalD={modalD} setModalD={setModalD} setMt={setMt} />
      <main className="bg-gradient-to-tr from-darkenGray to-darkenBlack flex items-center justify-center">
        {modalD && (
          <Modal modalD={modalD} setModalD={setModalD} setMt={setMt} mT={mT} />
        )}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Mainlayout;
