import React from "react";
import Home from "./Routes/Home";
import Reservations from "./Routes/Reservations";

import { useRoutes } from 'react-router-dom';


function App() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/reservations', element: <Reservations /> },
    //{ path: '*', element: <NotFound /> },
  ]);
  return routes
  // <>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     {/* <Route path="/reservations" element={<Reservations />} /> */}
  //   </Routes>
  // </>
  //);
}

export default App;
