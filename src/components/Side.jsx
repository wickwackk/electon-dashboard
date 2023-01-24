import { Link } from "react-router-dom";
import "../styles/side.css";

export default function Side() {
  return (
    <div className="side">
      <Link to="/controlpanel">Хянах самбар</Link>
      <Link to="/products">Бүтээгдэхүүнүүд</Link>
      <Link to="/orders">Захиалгууд</Link>
      <Link to="/users">Хэрэглэгчид</Link>
      <Link to="/moderator">Модератор</Link>
      <Link to="/settings">Тохиргоо</Link>
    </div>
  );
}
