import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";

const App = () => {
  const [modalD, setModalD] = useState(false);
  const [mT, setMt] = useState("s");
  const [searchCoin, setSearchCoin] = useState("");
  const [detailD, setDetailD] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <Mainlayout
            setMt={setMt}
            mT={mT}
            modalD={modalD}
            setModalD={setModalD}
            searchCoin={searchCoin}
            setSearchCoin={setSearchCoin}
          />
        }
      >
        <Route
          index
          element={
            <Home
              setDetailD={setDetailD}
              searchCoin={searchCoin}
              setSearchCoin={setSearchCoin}
            />
          }
        />
        <Route path="/:name" element={<Detail detailD={detailD} />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
