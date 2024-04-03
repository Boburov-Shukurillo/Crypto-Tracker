import React from "react";
import second from "../assets/crypto-coin.png";
import { Link } from "react-router-dom";
const Header = ({ setMt, setModalD, searchCoin, setSearchCoin }) => {
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
        <input
          type="search"
          onChange={(e) => setSearchCoin(e.target.value)}
          className="w-1/3 bg-darkenBlack/5 border-darkenGray border-2 rounded-xl h-12 px-5 montserrat text-lg text-white"
          placeholder="Search Crypto"
        />
        <Link to='/' className="text-white montserrat font-bold">Home</Link>
        <Link to='/contact' className="text-white montserrat font-bold">Contact</Link>
        <div className="flex items-center gap-x-5">
          <button
            onClick={openL}
            className="px-5 py-4 bg-red-500 rounded-xl text-white montserrat text-sm font-bold tracking-widest"
          >
            Login
          </button>
          <button
            onClick={openS}
            className="px-5 py-4 bg-green-500 rounded-xl text-white montserrat text-sm font-bold tracking-widest"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
