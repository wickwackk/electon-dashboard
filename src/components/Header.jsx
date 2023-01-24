import Electon from "../imgComp/Electon";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Electon color={"#003585"} />
        <form action="">
          <input type="search" placeholder="Search anything" />
          <button type="submit">Search</button>
        </form>
        <div className="headerRight">
          <button className="logoutButton">Гарах</button>
        </div>
      </div>
    </div>
  );
}
