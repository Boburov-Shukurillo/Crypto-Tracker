import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import up from "../assets/up.svg";
import down from "../assets/down-line.svg";
const Detail = () => {
  let [valuta, setvalut] = useState([]);
  const location = useLocation();
  const getCoin = location.pathname.split("/").join("").toLowerCase();
  const coin = valuta.filter((e) => e.name.toLowerCase() === getCoin);

  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";
  useEffect(() => {
    axios.get(API).then((res) => {
      setvalut(res.data);
    });
  }, []);

  return (
    <div className="containerb">
      <ul className="w-full">
        {coin.map((c) => {
          return (
            <li
              key={c.id}
              className="w-full flex items-center gap-x-10 justify-between"
            >
              <div className="w-1/4">
                <div className="w-full flex items-center justify-start mb-4">
                  <img src={c.image} alt={c.name + " icon"} className="w-10" />
                  <h1 className="text-white montserrat text-2xl font-bold flex items-center gap-x-5">
                    {c.name}
                    <p className="text-darkenBlack montserrat text-xl font-bold w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      #{c.market_cap_rank}
                    </p>
                  </h1>
                </div>
                <p className="text-white montserrat text-5xl font-extrabold w-full">
                  {c.current_price}$
                </p>
              </div>
              <div className="w-3/4 bg-darkenBlack p-20 rounded-3xl">
                <img src={up} className="w-full" alt="reyting png" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Detail;
