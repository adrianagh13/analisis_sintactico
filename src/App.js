import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/Home";
import DefinitionScreen from "./screens/DefinitionScreen";
import GLCScreen from "./screens/GLCScreen";
import TreesScreen from "./screens/TreesScreen";
import ChomskyScreen from "./screens/ChomskyScreen";
import DiagramsScreen from "./screens/DiagramsScreen";

function App() {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/definicion-gramatica" element={<DefinitionScreen />}/>
      <Route  path="/glc" element={<GLCScreen />}/>
      <Route  path="/glc" element={<GLCScreen />}/>
      <Route  path="/arboles-derivacion" element={<TreesScreen />}/>
      <Route  path="/formas-normales-chomsky" element={<ChomskyScreen />}/>
      <Route  path="/diagramas-sintaxis" element={<DiagramsScreen />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
