// primeiro arquivo a ser executado
import "./styles.css";

import Header from "./components/Header";
import About from "./components/About";
import Social from "./components/Social";
import Project from "./components/Project";
import { Button } from "react-bootstrap";
import Skills from "./components/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Project />
      {/* <Button variant="secundary">Button #1</Button> */}
      <Skills />
      <Social />
    </div>
  );
}

export default App;
