import React from "react";
import second from "../assets/crypto-coin.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-darkenBlack backdrop-blur-md">
      <div className="containerb flex items-center justify-between h-20">
        <Link to="/">
          <img src={second} className="h-full w-44" alt="logo" />
        </Link>
        <input
          type="search"
          className="w-1/3 bg-darkenBlack/5 border-darkenGray border-2 rounded-xl h-12 px-5 montserrat text-lg text-white"
          placeholder="Search Crypto"
        />

        <div className="flex items-center gap-x-5">
          <button className="px-5 py-4 bg-red-500 rounded-xl text-white montserrat text-sm font-bold tracking-widest">
            Login
          </button>
          <button className="px-5 py-4 bg-green-500 rounded-xl text-white montserrat text-sm font-bold tracking-widest">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
