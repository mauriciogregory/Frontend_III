export default function ComponentFunction(props) {
  const {nome, tarefa} = props;
  
  return (
    <>
      <li>{nome} trará {tarefa}.</li>
    </>
  );
}
