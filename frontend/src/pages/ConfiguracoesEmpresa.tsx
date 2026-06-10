import { useState } from "react";
import "../App.css";

function ConfiguracoesEmpresa() {
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log({
      nomeEmpresa,
      cnpj,
      telefone,
      email,
      endereco,
    });
  }

  return (
    <div className="container">
      <h1>Configurações da Empresa</h1>

      <p>Preencha os dados que aparecerão nos orçamentos.</p>

      <form onSubmit={handleSubmit}>
       <div className="form-group">
          <label>Nome da empresa</label>
          <br />
          <input
            type="text"
            value={nomeEmpresa}
            onChange={(e) => setNomeEmpresa(e.target.value)}
          />
        </div>

        <br />

        <div className="form-group">
          <label>CNPJ</label>
          <br />
          <input
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
        </div>

        <br />

        <div className="form-group">
          <label>Telefone</label>
          <br />
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <br />

        <div className="form-group">
          <label>E-mail</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div className="form-group">
          <label>Endereço</label>
          <br />
          <textarea
            rows={3}
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Salvar configurações
        </button>
      </form>
    </div>
  );
}

export default ConfiguracoesEmpresa;