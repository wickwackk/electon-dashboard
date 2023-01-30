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

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainBody container1">
        <Side />
        <div className="routes">
          <Routes>
            <Route path="/controlpanel" element={<ControlPanel />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/moderator" element={<Moderator />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
