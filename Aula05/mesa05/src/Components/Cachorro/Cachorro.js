import "./styles.css"

export default function Cachorro(props) {
  const { id, nome, idade, raca } = props.item;
  return (
    <div className="cachorro">
    <h3>Cachorro {id}:</h3>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Raça: {raca}</li>
      </ul>
    </div>
  );
}
