import "./style.css";



export default function Cartao(valor) {

  let tituloDoCartao = valor.text ?? 'Título padrão';
  let descricaoDoCartao = valor.text?.descricao ?? 'Descricao padrao'

  return (
    <section className="c-cartao">
      <h1 className="c-cartao__titulo">Titulo</h1>
      <div className="c-cartao__corpo">
        <p>Descrição</p>
      </div>
    </section>
  );
}
