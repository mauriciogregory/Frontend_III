import "./index.css";
import image from "../../assets/img/perfill.jpeg";

// data-aos="fade-right"
export default function About() {
  return (
    <main id="about">
      {/* <FaDiscord color="red" /> */}

      <div className="imagem-container">
        <img className="imagem-perfil" src={image} />
      </div>
      <div className="sobre" >
        <p>
          Atualmente desenvolvo pequenos projetos usando HTML, CSS, Javascript e
          React.
          <br></br>
          Sou aluno do Certified Tech Developer, na Digital House. Estou focando
          no estudo de Frontend.
        </p>
      </div>
    </main>
  );
}
