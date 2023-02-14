import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Side from "./components/Side";
import ControlPanel from "./pages/ControlPanel";
import Moderator from "./pages/Moderator";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import LayoutComp from "./components/LayoutComp";
import axios from "axios";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:2020/products")
      .then((res) => setProducts(res.data));
  }, [isChanged]);

  return (
    <div className="App">
      <LayoutComp>
        <div className="mainBody container1">
          <Side />
          <div className="routes">
            <Routes>
              <Route index path="/" element={<ControlPanel />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/users" element={<Users />} />
              <Route path="/moderator" element={<Moderator />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </LayoutComp>
    </div>
  );
}

export default App;
