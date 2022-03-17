import ComponentClasse from "./Components/ComponentClasse";
import ComponentFunction from "./Components/ComponentFunction";

const lista = [
  {
    id:"1",
    nome: "Carlos",
    status: true
  },
  {
    id:"2",
    nome: "Robert",
    status: false
  },
  {
    id:"3",
    nome:"Jéssica",
    status: true
  }
]

const lista2 = [
  {
    id:"1",
    nome: "Maria",
    tarefa: "batata-frita"
  },
  {
    id:"2",
    nome: "José",
    tarefa: "pizza"
  },
  ,
  {
    id:"2",
    nome: "João",
    tarefa: "bebidas"
  }
]

function App() {
  
  return (
  <>
    <h4>Convidados:</h4>
      {
        lista.map(
          (item) => <ComponentClasse key={item.id} nome={item.nome} status={item.status}/>
        )
      }

    <h4>Tarefas:</h4>
      {lista2.map( (item) => <ComponentFunction key={item.id} nome={item.nome} tarefa={item.tarefa}/>)}
    </>
  );
}

export default App;
