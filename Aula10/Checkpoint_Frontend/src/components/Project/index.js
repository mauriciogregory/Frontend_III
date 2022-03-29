import "./styles.css";

import imagem from "../../assets/img/logo.png";

// array aqui
const data = [
  {
    id: "1",
    image: imagem,
    name: "Projeto 1",
    link: "https://mauriciogregory.github.io/ctd_front_end_1_checkpoint_3/",
  },
  {
    id: "2",
    image: imagem,
    name: "Projeto 1",
    link: "www.google.com",
  },
  {
    id: "3",
    image: imagem,
    name: "Projeto 1",
    link: "www.google.com",
  },
  {
    id: "4",
    image: imagem,
    name: "Projeto 1",
    link: "www.google.com",
  },
  {
    id: "5",
    image: imagem,
    name: "Projeto 1",
    link: "www.google.com",
  },
];

export default function Projects() {
  return (
    <div className="content-projects" id="project">
      <ul className="lista-projects">
        {/* {data.map((image, name, link) => ( */}

        {data.map((item) => (
          <li className="item">
            <div className="card">
              <img src={item.image} />
              <div className='texto-card'>
              <h3>{item.name}</h3>
              </div>
              <div className='links'>
                <a className="link-projects" href={item.link}>
                  Link
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
