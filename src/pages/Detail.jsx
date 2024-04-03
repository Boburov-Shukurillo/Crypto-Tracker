import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import up from "../assets/up.svg";
import down from "../assets/down-line.svg";
const Detail = () => {
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";
  let [valuta, setvalut] = useState([]);
  useEffect(() => {
    axios.get(API).then((res) => {
      setvalut(res.data);
    });
  }, []);

  const location = useLocation();
  const getCoin = location.pathname.split("/").join("").toLowerCase();
  const coin = valuta.filter((e) => e.name.toLowerCase() === getCoin);

  return (
    <div className="containerb">
      <ul className="w-full">
        {coin.map((c) => {
          return (
            <li key={c.id} className="w-full flex items-center gap-x-10 justify-between">
              <div className="w-1/6 flex items-center flex-col h-full justify-between">
                <img src={c.image} alt={c.name + " icon"} className="w-20" />
                <h1 className="text-white montserrat text-4xl font-bold">
                  {c.name}
                <p className="text-darkenBlack montserrat text-xl font-bold w-10 h-10 bg-white">#{c.market_cap_rank}</p>
                </h1>
                <p className="text-white montserrat text-xl font-bold">{c.current_price}$</p>
              </div>
              <img
                src={up}
                className="w-1/2 border-2 py-20 bg-white"
                alt="up icon"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Detail;
