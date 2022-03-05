// import './App.css';
// fazendo a importação da imagem do react
import logo from "./"

import Header from "../src/Components/Header";

function App() {
  // aqui o JS

  return (
    // usar fragmentação ou uma div como elemento pai
    // para usar arquivos externos precisam ser empacotados, tem que importar
  <>
      <Header />
    </>
  );
}

export default App;
