import logo from "../../assets/logo.png";
import "./index.css";

export default function Header() {
  return (
    <div className="header-nav">
      <div>
        <img src={logo} />
      </div>
      <ul className="menu-nav">
        <li>Como fazer</li>
        <li>Ofertas</li>
        <li>Depoimentos</li>
        <li>Vídeos</li>
        <li>Meu carrinho</li>
      </ul>
    </div>
  );
}
