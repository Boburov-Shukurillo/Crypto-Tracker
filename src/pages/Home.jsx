import axios from "axios";
import React, { useEffect, useState } from "react";
import up from "../assets/up.svg";
import down from "../assets/down-line.svg";
const Home = () => {
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";
  let [valuta, setvalut] = useState([]);
  let [loader, setLoader] = useState(false);
  useEffect(() => {
    axios.get(API).then((res) => {
      setvalut(res.data);
    });
  }, []);
  return (
    <div className="containerb">
      <ul className="flex flex-col gap-y-2.5 items-center py-10">
        {valuta.map((e) => {
          return (
            <li
              key={e.id}
              className="p-5 flex items-center hover:bg-darkenBlack rounded-xl justify-between w-full montserrat hover:shadow- hover:shadow-white"
            >
              <span className="text-white montserrat">{e.market_cap_rank}</span>
              <div className="flex items-center justify-start gap-x-8 w-1/6">
                <img src={e.image} alt={e.name + " png"} className="w-10" />
                <h1 className="text-white text-center w-32 truncate">
                  {e.name}
                </h1>
              </div>
              <h1 className="text-white w-1/6 text-center">
                {e.current_price}$
              </h1>
              {e.market_cap_change_percentage_24h > 0 ? (
                <h1 className="text-green-500 font-bold montserrat w-1/6 text-center">
                  {e.market_cap_change_percentage_24h}%
                </h1>
              ) : (
                <>
                  <h1 className="text-red-700 font-bold montserrat w-1/6 text-center">
                    {e.market_cap_change_percentage_24h}%
                  </h1>
                </>
              )}
              <h1 className="text-white w-1/6 text-center">
                {e.price_change_percentage_24h}$
              </h1>
              {e.market_cap_change_percentage_24h > 0 ? (
                <img src={up} alt="up icon" />
              ) : (
                <img src={down} alt="up icon" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
