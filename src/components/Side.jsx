import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/side.css";

export default function Side() {
  const [selected, setSelected] = useState("controlpanel");
  return (
    <div className="side">
      <Link
        onClick={() => setSelected("controlpanel")}
        className={selected === "controlpanel" ? "active" : undefined}
        to="/controlpanel"
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
