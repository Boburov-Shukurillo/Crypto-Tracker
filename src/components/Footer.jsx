import React from "react";
import second from "../assets/crypto-coin.png";
import { Link } from "react-router-dom";
const Footer = ({ setMt, setModalD, searchCoin, setSearchCoin }) => {
  const openS = () => {
    setModalD(true);
    setMt("s");
  };
  const openL = () => {
    setModalD(true);
    setMt("l");
  };
  return (
    <header className="bg-darkenBlack backdrop-blur-md">
      <div className="containerb flex items-center justify-between h-20">
        <Link to="/">
          <img src={second} className="h-full w-44" alt="logo" />
        </Link>
        
      </div>
    </header>
  );
};

export default Footer;
