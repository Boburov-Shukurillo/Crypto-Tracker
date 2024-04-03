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

const App = () => {
  const [modalD, setModalD] = useState(false);
  const [mT, setMt] = useState("s");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <Mainlayout
            setMt={setMt}
            mT={mT}
            modalD={modalD}
            setModalD={setModalD}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="/:name" element={<Detail />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
