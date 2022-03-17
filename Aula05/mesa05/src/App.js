import Cachorro from "./Components/Cachorro/Cachorro";
import Header from "./Components/Header/Header";
import "./styles.css";

const data = [
  {
    id: 1,
    nome:"Rex",
    idade:2,
    raca: "Xitsu"
  },
  {
    id: 2,
    nome:"Spok",
    idade:4,
    raca: "Vira-lata"
  },
  {
    id: 3,
    nome:"Dog",
    idade:5,
    raca: "Maltês"
  }
]

function App() {
  
  return (
    <>
      <Header />
      {
      data.map((item,index) => {
      return  <Cachorro key={index.toString()} item={item} />
    })}
    </>
  );
}

export default App;
