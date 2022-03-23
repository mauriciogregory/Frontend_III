import "./index.css";
import image from "../../assets/img/logo.png";
// import {FaDiscord} from 'react-icons/fa' // []V PORQUE NÃO  OFI EXPORTADO DEFAULT 'react-icons/fa';

export default function About() {
  return (
    <main id="about">
      {/* <FaDiscord color="red" /> */}
      <div className="sobre">
        <p>
          Atualmente sou estudante de Engenharia de Computação, na Universidade
          de Santa Cruz do Sul.
        </p>

        <p>
          Sou aluno do Certified Tech Developer, na Digital House. Estou focando
          no estudo de Frontend.
        </p>
      <div className="imagem-perfil">
        <img src={image} />
      </div>
      </div>
    </main>
  );
}
