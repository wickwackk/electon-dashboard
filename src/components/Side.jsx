import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../styles/side.css";

export default function Side() {
  // let pageName = localStorage.getItem("sideNames");
  const { pathname } = useLocation();
  // console.log("original pathname: ", pathname);
  // console.log("pathname: ", pathname.slice(1, pathname.length));
  const [selected, setSelected] = useState(
    pathname !== "/" ? pathname.slice(1, pathname.length) : "controlpanel"
  );
  // localStorage.setItem("sideNames", selected);

  // useEffect(()=>{
  //   setSelected("controlpanel")
  // },[])

  return (
    <div className="side">
      <Link
        onClick={() => setSelected("controlpanel")}
        className={selected === "controlpanel" ? "active" : undefined}
        to="/"
      >
        Хянах самбар
      </Link>
      <Link
        onClick={() => setSelected("products")}
        className={selected === "products" ? "active" : undefined}
        to="/products"
      >
        Бүтээгдэхүүнүүд
      </Link>
      <Link
        onClick={() => setSelected("orders")}
        className={selected === "orders" ? "active" : undefined}
        to="/orders"
      >
        Захиалгууд
      </Link>
      <Link
        onClick={() => setSelected("users")}
        className={selected === "users" ? "active" : undefined}
        to="/users"
      >
        Хэрэглэгчид
      </Link>
      <Link
        onClick={() => setSelected("moderator")}
        className={selected === "moderator" ? "active" : undefined}
        to="/moderator"
      >
        Модератор
      </Link>
      <Link
        onClick={() => setSelected("settings")}
        className={selected === "settings" ? "active" : undefined}
        to="/settings"
      >
        Тохиргоо
      </Link>
    </div>
  );
}
