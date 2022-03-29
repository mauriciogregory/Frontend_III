import { Formik } from "formik";
import InputMask from "react-input-mask";
import "./index.css";

export default function App1() {
  return (
    <div className='"App'>
      <Formik
        // valores iniciais dos campos
        initialValues={{
          nome: "Nome",
          email: "",
          nascimento: "",
          telefone: "",
          cpf: "",
          peso: "",
          altura: "",
        }}
        // validação de campos
        validate={
          // validate é uma função
          (valor) => {
            const errors = {};
            // se nome vazio criar erros
            if (!valor.nome) {
              errors.nome = "Campo deve ser preenchido";
            }

            if (!valor.email) {
              errors.email = "Campo deve ser preenchido";
            } else if (
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valor.email)
            ) {
              errors.email = "Email não válido";
            }

            if (!valor.telefone) {
              errors.telefone = "Deve ser preenchido";
            } else if (/\([0-9]{2}\) (?:9[0-9]{1}|[1-5]{1})[0-9]{3}-[0-9]{4}/i.test(valor.telefone) ){
              errors.telefone = "Incorreto";
            }

            return errors;
          }
        }
        // uma função que é executada quando o botão de salvar eh executado
        onSubmit={() => alert("ok")}
      >
        {/* quando queremos passar algo por uma função no npx, precisa do {} para comunicar com o  */}
        {
          // desestruturação {values}, essa é uma função
          ({ values, handleSubmit, errors, handleChange }) => (
            <form onSubmit={handleSubmit}>
              {/* type = texto é default entaão não proecisa passar no input */}
              <div>
                <h1>Cadastro de Pacientes</h1>
                <div>
                  <button type="submit">Salvar</button>
                  <button>Limpar Campos</button>
                </div>
              </div>

              <label>
                <span>Nome</span>
                {/* precisa acrescentar name, função para poder editar */}
                <input
                  autoComplete="off"
                  autoCapitalize="on"
                  type="text"
                  value={values.name}
                  name="nome"
                  onChange={handleChange}
                />
                <span>{errors.nome}</span>
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                />
                <span>{errors.email}</span>
              </label>

              <label>
                <span>Data de Nascimento</span>
                <input
                  type="date"
                  value={values.nascimento}
                  name="nascimento"
                />
                <span>Mensagem de erro</span>
              </label>

              <label>
                <span>Telefone</span>

                {/* <input type="tel" value={values.telefone} /> */}
                <InputMask
                  autoComplete="off"
                  mask="(99)99999-9999"
                  onChange={handleChange}
                  value={values.telefone}
                  name="telefone"
                />
                <span>{errors.telefone}</span>
              </label>

              <label>
                <span>CPF</span>
                <input type="text" value={values.cpf} />
                <span>Mensagem de erro</span>
              </label>

              <label>
                <span>Altura</span>
                <input type="text" value={values.altura} />
                <span>Mensagem de Erro</span>
              </label>

              <label>
                <span>Peso</span>
                <input type="text" value={values.peso} />
                <span>Mensagem de erro</span>
              </label>
            </form>
          ) // fim da função
        }
        {/* precisa por causa do js */}
      </Formik>
    </div>
  );
}
