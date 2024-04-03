import axios from "axios";
import React, { useEffect, useState } from "react";
import up from "../assets/up.svg";
import down from "../assets/down-line.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const Home = () => {
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";
  let [valuta, setvalut] = useState([]);
  useEffect(() => {
    axios.get(API).then((res) => {
      setvalut(res.data);
    });
  }, []);
  return (
    <div className="containerb">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        spaceBetween={10}
        slidesPerView={3}
        className="tradeSwiper"
      >
        {valuta.slice(0, 6).map((coin,index) => {
          return (
            <SwiperSlide
              key={coin.id}
              className="text-xl montserrat font-bold text-white rounded-2xl border-2 border-white/20 p-5 flex items-center justify-between"
            >
              <div className="w-1/3 flex items-center justify-between">
                <img
                  src={coin.image}
                  className="w-20"
                  alt={coin.name + " png"}
                />
                <div className="w-1/4">
                  <h2>{coin.name}</h2>
                  <p className="text-sm text-white/60">{coin.current_price}$</p>
                </div>
              </div>
              {coin.market_cap_change_percentage_24h > 0 ? (
                <img src={up} alt="up icon" />
              ) : (index%2===0?(<img src={down} alt="up icon" />):(<img src={down} alt="up icon" />)
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

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
