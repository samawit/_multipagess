import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";

import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Calculator from "./pages/Calculator/Calculator";
import Components from "./pages/Components/Components";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";
import Animetion from "./pages/Animation/Animation";
import Login from "./pages/Login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import { fetchProducts } from "./data/products";

import "./App.css";

const intTab = "home";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(intTab);
  }, []);

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => setProducts(fetchProducts()), []);
  useEffect(() => console.log(products), [products]);

  if (token === "") {
    // no login
    return <Login setToken={setToken} setRole={setRole} />;
  } else
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  products={products}
                  carts={carts}
                  tab={tab}
                  setTab={setTab}
                  setToken={setToken}
                />
              }
            >
              <Route path={"/"} element={<Home />} />
              <Route path={"/home"} element={<Home />} />
              <Route path={"/calculator"} element={<Calculator />} />
              <Route path={"/components"} element={<Components />} />
              <Route path={"/todo"} element={<Todo />} />
              <Route
                path={"/products"}
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path={"/carts"}
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
              <Route path={"/animation"} element={<Animetion />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  // login
}

export default App;