import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/Home";
import DetailsScreen from "./screens/DetailsScreen";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route  path="*" element={<Home />}/>
      <Route  path="/details" element={<DetailsScreen />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
