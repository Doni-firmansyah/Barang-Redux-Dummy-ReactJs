import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Create from "./pages/products/Create";
import Detail from "./pages/products/Detail";
import Edit from "./pages/products/Edit";
import List from "./pages/products/List";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavbarComponent/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product" element={<List/>} />
            <Route exact path="/create" element={<Create/>} />
            <Route exact path="/product/:id" element={<Detail/>}/>
            <Route exact path="/edit/:id" element={<Edit/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
