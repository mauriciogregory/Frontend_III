

function App() {
  return (
    <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>

        <form>
          <input placeholder="Titulo" />          
          <input placeholder="Descricao" />
          Status <input type="checkbox" />
          <input type="date" />
          <button>Salvar</button>
        </form>
    </div>
  );
}

export default App;
