import React, { useState } from "react";
import gitHub from "../assets/github.png";
import telegram from "../assets/telegram.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instalog.png";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastNama, setLastName] = useState("");
  const [quession, setQuession] = useState("");
  const telegram_bot_id = "7071723627:AAH4AeBMChX6KF7tThxth2kPI3IJ4_PxaJY";
  const chat_id = "6076096557";
  const salom = () => {
    axios.post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      chat_id,
      text: `https://boburov-shukurillo-porfolio.netlify.app a new person has arrived in your portfolio:\n\n👩‍💻 User Name : ${name}\n\n 📋 Last Name : ${lastNama}\n\n 📧 Email : ${email}\n\n  User Request📈${quession}`,
    });
  };

  return (
    <div id="contact" className="bg-darkenBlue py-20 w-full">
      <div className="containerb flex items-center justify-center flex-col">
        <h1 className="montserrat text-3xl text-white tracking-widest mb-5">
          Connect With Me
        </h1>
        <form
          onSubmit={salom}
          className="w-2/3 flex flex-col items-center gap-10"
        >
          <div className="w-full flex flex-col gap-5 items-center justify-center">
            <div className="w-full flex items-center gap-x-5">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className="w-full h-14 px-5 bg-white/20  placeholder:text-white rounded-xl montserrat-medium text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastNama}
                required
                className="w-full h-14 px-5 bg-white/20  placeholder:text-white rounded-xl montserrat-medium text-white"
              />
            </div>
            <input
              type="text"
              required
              className="w-full h-14 px-5 text-white placeholder:uppercase placeholder:text-white montserrat-medium bg-white/20 rounded-xl"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              cols="30"
              rows="30"
              onChange={(e) => setQuession(e.target.value)}
              value={quession}
              placeholder="Write You Quession"
              className="w-full min-h-80 max-h-80 rounded-xl p-5 col-start-1 col-end-3 bg-white/20 text-white montserrat-medium"
            ></textarea>
          </div>
          <div className="w-full flex items-center justify-center gap-x-20 max-md:hidden ">
            <div className="flex items-center justify-between gap-5 w-1/2">
              <a
                target="_blank"
                href="https://github.com/Boburov-Shukurillo/"
                className="flex items-center justify-between gap-x-5"
              >
                <img
                  src={gitHub}
                  alt="gitHub png"
                  className="w-14 rounded-full"
                />
              </a>
              <a
                target="_blank"
                href="https://www.t.me/BoburovSh"
                className="flex items-center justify-between gap-x-5"
              >
                <img
                  src={telegram}
                  alt="email png"
                  className="w-14 rounded-full"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/shukurilo-boburov-a037222b8/"
                className="flex items-center justify-between gap-x-5"
              >
                <img
                  src={linkedin}
                  alt="linkedin png"
                  className="w-14 rounded-full"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/boburov.dev/"
                className="flex items-center justify-between gap-x-5"
              >
                <img
                  src={instagram}
                  alt="linkedin png"
                  className="w-14 rounded-full"
                />
              </a>
            </div>
            <button className="bg-black/75 w-1/2 py-4 rounded-lg text-white montserrat-medium max-sm:w-full">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
