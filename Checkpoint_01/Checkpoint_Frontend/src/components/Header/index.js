import logo from "../../assets/img/logo2_.png";
import "./index.css";

function handler(id) {
  document.getElementById(id).scrollIntoView();
}

export default function Header() {
  return (
    <header data-aos="zoom-out-right">
      <h1>Portifólio</h1>
      {/* <img className="logo" src={logo} width={60} heigth={30} /> */}
      <ul className="menu">
        {/* {} */}
        <li className="item-menu" onClick={() => handler("about")}>
          About
        </li>
        <li className="item-menu" onClick={() => handler("project")}>
          Projects
        </li>
        <li className="item-menu" onClick={() => handler("skill")}>
          Skills
        </li>
        <li className="item-menu" onClick={() => handler("social")}>
          Social
        </li>
      </ul>
    </header>
  );
}
