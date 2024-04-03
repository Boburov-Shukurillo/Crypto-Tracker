import React from "react";

const Modal = ({ setModalD, mT }) => {
  return (
    <div
      onClick={() => setModalD(false)}
      className="w-full h-full absolute flex items-center top-0 justify-center bg-black/55 z-50"
    >
      {mT === "s" && (
        <div className=" w-1/3 max-w-screen-md h-500 backdrop-blur-md bg-darkenBlack/50 border-2 border-white/25 rounded-3xl p-10">
          <h1 className="text-5xl montserrat font-bold text-white text-center mb-10">
            Sign In
          </h1>

          <input
            type="text"
            required
            className="w-full h-14 rounded-xl bg-darkenGray px-5 mb-5 montserrat font-medium text-sm"
            placeholder="Name"
          />
          <input
            type="email"
            required
            className="w-full h-14 rounded-xl bg-darkenGray px-5 mb-5 montserrat font-medium text-sm"
            placeholder="Email"
          />
          <input
            type="password"
            required
            className="w-full h-14 rounded-xl bg-darkenGray px-5 mb-5 montserrat font-medium text-sm"
            placeholder="Password"
          />
          <button className="w-full h-16 bg-slate-950 rounded-xl text-white montserrat font-bold tracking-widest text-xl ">
            Submit
          </button>
        </div>
      )}
      {mT === "l" && (
        <div className=" w-1/3 max-w-screen-md h-500 backdrop-blur-md bg-darkenBlack/50 border-2 border-white/25 rounded-3xl p-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl montserrat font-bold text-white text-center mb-10">
            Log In
          </h1>
          <input
            type="email"
            required
            className="w-full h-14 rounded-xl bg-darkenGray px-5 mb-5 montserrat font-medium text-sm"
            placeholder="Email"
          />
          <input
            type="password"
            required
            className="w-full h-14 rounded-xl bg-darkenGray px-5 mb-5 montserrat font-medium text-sm"
            placeholder="Password"
          />
          <button className="w-full h-16 bg-slate-950 rounded-xl text-white montserrat font-bold tracking-widest text-xl ">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
