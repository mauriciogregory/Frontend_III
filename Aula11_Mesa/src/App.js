import "./index.css";
import { Formik } from "formik";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// const MySwal = withReactContent(Swal);

function App() {
  return (
    <Formik
      // valores iniciais
      initialValues={({ nome: "" }, { email: "" }, { telefone: "" })}
      onSubmit={(values) => {
        // alert("Nome: " + values.nome +
        //        "\nEmail: " + values.email +
        //        "\nTelefone: " + values.telefone)

        const nome = values.nome;
        const email = values.email;
        const telefone = values.telefone;

        MySwal.fire({
          title: <p>{nome}</p>,
          text: email,
          footer: telefone,
        });
      }}
      // validação dos campos
      validate={(values) => {
        const errors = {};

        // valindando campo nome
        if (!values.nome) {
          errors.nome = "Campo Obrigatório!";
        } else if (!/^[A-Za-z]{3,}$/i.test(values.nome)) {
          errors.nome = "Erro!";
        }

        // validando campo email
        if (!values.email) {
          errors.email = "Campo Obrigatório";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email não válido!";
        }

        // validando telefone
        if (!values.telefone) {
          errors.telefone = "Campo Obrigatório!";
        } else if (!/^\([0-9]{2}\)[0-9]{5}\-[0-9]{4}$/i.test(values.telefone)) {
          errors.telefone = "Telefone incorreto!";
        }

        return errors;
      }}
    >
      {({ handleSubmit, handleChange, errors }) => (
        <form onSubmit={handleSubmit} className="form-text">
          <input
            name="nome"
            placeholder="Nome"
            onChange={handleChange}
          />
          <br></br>
          {errors.nome && <span>{errors.nome}</span>}

          <br></br>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <br></br>
          {errors.email && <span>{errors.email}</span>}

          <br></br>
          <input
            name="telefone"
            placeholder="(00)00000-0000"
            onChange={handleChange}
          />
          <br></br>
          {errors.telefone && <span>{errors.telefone}</span>}

          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
