// import './App.css';

// fazendo a importação da imagem do react
import logo from "."
//import {Box, Box1} from "./Box"; //importanto mais de um componente
import Box from "./Box";
// function Box(props){
//   return(
//     <li>props.item</li>
//   );
// }

function App() {
  // aqui o JS
  const frutas = ["Cachorro", "Gato", "Macaco", "Jacaré", "Vaca", "Anta", "Rinoceronte"]; 

  return (
    // usar fragmentação ou uma div como elemento pai
    // para usar arquivos externos precisam ser empacotados, tem que importar
  <>
      {/* <h1>Olá</h1>
      <p>
        ldfkalsdkflaskdf sdlfka sdkfa dflkadf alsdfkalsdf als
      </p>

      <img src={logo} alt="Logo do React"/> */}

      {/* <Box item="cachorro"/>
      <Box1 item="Gato"/> */}

      {
        frutas.map((item, index) => {
          return(
            <Box item={item} key={index.toString()}/>
          )
        })
      }
    </>
  );
}

export default App;
