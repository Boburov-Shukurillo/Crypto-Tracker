import axios from "axios";
import React, { useEffect, useState } from "react";
import up from "../assets/up.svg";
import down from "../assets/down-line.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import bitCoin from "../assets/Bitcoin-Logo.png";
import Tron from "../assets/tron.webp";
import Ertherium from "../assets/erthereum.png";
import { Link } from "react-router-dom";
const Home = ({ searchCoin, setDetailD }) => {
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";
  let [valuta, setvalut] = useState([]);
  useEffect(() => {
    axios.get(API).then((res) => {
      setvalut(res.data);
      setDetailD(res.data);
    });
  }, []);
  return (
    <div className="w-full">
      {searchCoin.trim() == "" && (
        <div className="w-full h-full p-32 mb-20 bg-gradient-to-tr from-slate-900 to-slate-950  ">
          <div className="containerb flex items-center justify-between">
            <div className="flex flex-col w-1/2">
              <h1 className="text-7xl text-white montserrat zingDemo mb-5">
                Show & Tracking <br />
                100 Crypto Coin
              </h1>
              <p className="w-full montserrat text-white/30 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Labore, laudantium accusamus. Suscipit Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Doloremque, nostrum?
              </p>
            </div>
            <div className="h-500 w-500 relative ">
              <img
                src={bitCoin}
                width={400}
                height={400}
                className="absolute w-64 h-64 rounded-full object-cover jump top-20"
                alt="bitcoin"
              />
              <img
                src={Ertherium}
                width={400}
                height={400}
                className="absolute w-60 h-60 bottom-0 left-16 rounded-full object-cover jump1"
                alt="bitcoin"
              />
              <img
                src={Tron}
                width={400}
                height={400}
                className="absolute w-64 h-64 left-1/3 bottom-1/4 rounded-full object-cover jump2"
                alt="bitcoin"
              />
            </div>
          </div>
        </div>
      )}

      <div className="containerb">
        {searchCoin.trim() == "" && (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            spaceBetween={10}
            slidesPerView={3}
            className="tradeSwiper"
          >
            {valuta.slice(0, 6).map((coin, index) => {
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
                      <h2 className=" w-20 truncate">{coin.name}</h2>
                      <p className="text-sm text-white/60 w-20 truncate">
                        {coin.current_price}$
                      </p>
                    </div>
                  </div>
                  {coin.market_cap_change_percentage_24h > 0 ? (
                    <img src={up} alt="up icon" />
                  ) : index % 2 === 0 ? (
                    <img src={down} alt="up icon" />
                  ) : (
                    <img src={down} alt="up icon" />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <ul className="flex flex-col gap-y-2.5 items-center py-10">
          {valuta.map((e) => {
            if (e.name.toLowerCase().includes(searchCoin.toLowerCase())) {
              return (
                <li key={e.id} className="w-full">
                  <Link
                    to={`/${e.name}`}
                    className="p-5 flex items-center hover:bg-darkenBlack rounded-xl justify-between w-full montserrat hover:shadow- hover:shadow-white"
                  >
                    <span className="text-white montserrat">
                      {e.market_cap_rank}
                    </span>
                    <div className="flex items-center justify-start gap-x-8 w-1/6">
                      <img
                        src={e.image}
                        alt={e.name + " png"}
                        className="w-10"
                      />
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
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
