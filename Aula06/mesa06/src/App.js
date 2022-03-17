import ComponentClasse from "./Components/ComponentClasse";
import ComponentFunction from "./Components/ComponentFunction";

function App() {
  
  return (
  <>
    <h4>Convidados:</h4>
     < ComponentClasse nome="Nicolas" naLista={true} />
     < ComponentClasse nome="Pedro" naLista={true} />
     < ComponentClasse nome="Carolina" naLista={false} />

    <h4>Tarefas:</h4>
      <ComponentFunction nome="Nicolas" tarefa="batata-frita" />
      <ComponentFunction nome="Pedro" tarefa="pizaa" />
      <ComponentFunction nome="Carolina" tarefa="bebidas" />
    </>
  );
}

export default App;
