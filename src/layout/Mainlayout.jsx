import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Modal from "../components/Modal";

const Mainlayout = ({
  modalD,
  setModalD,
  mT,
  setMt,
  searchCoin,
  setSearchCoin,
}) => {
  return (
    <>
      <Header
        modalD={modalD}
        searchCoin={searchCoin}
        setSearchCoin={setSearchCoin}
        setModalD={setModalD}
        setMt={setMt}
      />
      <main className="bg-gradient-to-tr h-full from-darkenGray to-darkenBlack flex items-center justify-center">
        {modalD && (
          <Modal modalD={modalD} setModalD={setModalD} setMt={setMt} mT={mT} />
        )}
        <Outlet />
      </main>
    </>
  );
};

export default Mainlayout;
