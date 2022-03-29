import "./index.css";
import { FaJsSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
// data-aos="fade-right"
export default function Skills() {
  return (
    <div className="skills" id="skill">
      <div className="skill-ling">
        <FaJava className="java" />
        <p className="ling">Java</p>
      </div>
      <div className="skill-ling">
        <FaJsSquare className="js" />
        <p className="ling">Javascript</p>
      </div>

      <div className="skill-ling">
        <FaHtml5 className="html" />
        <p className="ling">Html</p>
      </div>
      <div className="skill-ling">
        <FaCss3 className="css" />
        <p className="ling">Css</p>
      </div>
    </div>
  );
}
