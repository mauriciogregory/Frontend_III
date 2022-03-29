import "./index.css";
// import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

export default function Social() {
  return (
    <div className="social_" id="social">
      {/* <FiInstagram className='instagram' /> */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/mauriciogregory/">
          <FaLinkedin className="linkedin" />
        </a>
        <a href="https://github.com/mauriciogregory">
          <FaGithub className="github" />
        </a>

        {/* <FaMailBulk className="email" /> */}
      </div>
      <div className="copy">
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  );
}
