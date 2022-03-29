import "./styles.css";
import imagemA from "../../assets/img/projeto_frontend2_grupo.png";
import imagemB from "../../assets/img/projeto_frontend2_3_grupo.png";
import imagemC from "../../assets/img/projeto_frontend2_1_grupo.png";
import imagemD from "../../assets/img/projeto_genius.png";
import imagemE from "../../assets/img/projeto_clone_netflix.png";
import imagemF from "../../assets/img/projeto_linktree.png"



// import imagem from "../../assets/img/logo.png";

// array aqui
const data = [
  {
    id: "1",
    image: imagemF,
    name: "Projeto LinkTree",
    link: "https://mauriciogregory.github.io/LinkTree/"
  },
  {
    id: "2",
    image: imagemE,
    name: "Clone Netflix",
    link: "https://mauriciogregory.github.io/NetFlix_exemplo/",
  },
  {
    id: "3",
    image: imagemD,
    name: "Projeto Genius",
    link: "https://mauriciogregory.github.io/genius-game-sample/",
  },
  {
    id: "4",
    image: imagemC,
    name: "Projeto Frontend II",
    link: "https://mauriciogregory.github.io/Frontend-checkpoint-01-CTD/",
  },
  {
    id: "5",
    image: imagemB,
    name: "Projeto Frontend I",
    link: "https://github.com/mauriciogregory/ctd_front_end_1_checkpoint_3",
  },
  {
    id: "6",
    image: imagemA,
    name: "Projeto Frontend II",
    link: "https://mauriciogregory.github.io/checkpoint2_frontendII/",
  }
];

export default function Projects() {
  return (
    <div className="content-projects" id="project">
      <ul className="lista-projects">
        {/* {data.map((image, name, link) => ( */}

        {data.map((item) => (
          <li className="item">
            <div data-aos="zoom-in-down" className="card">
              <img width={280} src={item.image} />
              {/* <div className="cor">

              </div> */}
              <div className="texto-card">
                <h3>{item.name}</h3>
              </div>
              <div className="links">
                <a className="link-projects" href={item.link}>
                  GitHub
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
