// Componentes controlados
// existem bibliotecas para usar qu eé mais usual

import { useState } from "react";

function App1() {
  const [nome, setNome] = useState("Front");
  const [curso, setCurso] = useState("");


  // previne o recarregamento da página
  function submitForm(event) {
    // alert('Formulário enviado!!');
    event.preventDefault(); // não deixar que o react recarregue automaticamente
  }

  return (
  <form onSubmit={submitForm}>
    <input placeholder="mail" type="email" />
    <h1>{nome} - {curso}</h1>
    <input 
    value={nome}
    placeholder="Nome" 
    onChange={(event) => setNome(event.target.value)} /> 

    <select onChange={(event) => setCurso(event.target.value)} defaultValue={curso}>
      <option></option>
      <option value={0}>Aula Frontend</option>
      <option value={1}>Aula Backend</option>
      <option value="devops">DevOps</option>
    </select>

    <input type="submit" />
  </form>
  );
}

export default App1;
