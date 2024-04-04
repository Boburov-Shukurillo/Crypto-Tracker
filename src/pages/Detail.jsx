import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import up from "../assets/up.svg";
import down from "../assets/down-line.svg";
const Detail = ({ detailD }) => {
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
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1year", "1month", "7d", "24h", "now"],
        datasets: [
          {
            label: "# of Votes",
            data: [55000, 57340, 52900, 43023, 64600],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="containerb flex items-center">
      <ul className="w-1/2 py-32">
        {coin.map((c) => {
          return (
            <li
              key={c.id}
              className="w-full flex items-center gap-x-10 justify-between"
            >
              <div className="w-full ">
                <div className="w-full flex items-center justify-start mb-5">
                  <img src={c.image} alt={c.name + " icon"} className="w-10" />
                  <h1 className="text-white montserrat text-2xl font-bold flex items-center gap-x-5">
                    {c.name}
                    <p className="text-darkenBlack montserrat text-xl font-bold w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      #{c.market_cap_rank}
                    </p>
                  </h1>
                </div>
                <p className="text-white text-xl montserrat tracking-widest w-full mb-5">
                  Current Price: {c.current_price}$
                </p>
                <p className="text-white text-sm montserrat tracking-widest w-full mb-5">
                  Market capitalization : {c.price_change_percentage_24h}%
                </p>
                <p className="text-white text-sm montserrat tracking-widest w-full mb-5">
                  Trading volume for 24 hours {c.price_change_percentage_24h}%
                </p>
                <p className="text-white text-sm montserrat tracking-widest w-full mb-5">
                  General offer {c.total_supply}%
                </p>
                <p className="text-white text-sm montserrat tracking-widest w-full mb-5">
                  Total volume: {c.total_supply}%
                </p>
                <Link
                  to="/"
                  className="px-6 py-3 montserrat text-sm inline-block bg-red-600 text-white rounded-lg"
                >
                  Back To Home Page
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="w-full">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
};

export default Detail;
