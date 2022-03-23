// Componentes controlados
// existem bibliotecas para usar qu eé mais usual

// usando o formik
// npm i formik
import { Formik } from "formik"; // do node_modules
function App() {
  return (
    <Formik 
    initialValues={{email:""}} 
    onSubmit={(values) => alert(values.email)}
      validate={(values) => {
        const errors = {};

        if (!values.email){
          errors.email = "Obrigatorio"
        } else {

        }
        return errors;
      }}
    >
      {/* o Formik precisa injetar algo que é usado no formulário */}
      {({handleSubmit, handleChange, errors}) => {
        <form onSubmit={handleSubmit}>
          <input name="email" placeholder="email" onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
          <button type="submit">Submit</button>
        </form>;
      }}
    </Formik>
  );
}

export default App;
