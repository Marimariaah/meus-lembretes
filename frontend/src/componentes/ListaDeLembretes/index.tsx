import { useState, useEffect } from "react";
import axios from "axios";

import "./style.scss";

import { FiTrash, FiCheckSquare } from "react-icons/fi";

export function ListaDeLembretes() {
  const [Lembretes, setLembretes] = useState<Lembrete[]>([]);
  const [novoTituloDoLembrete, setNovoTituloDoLembrete] = useState("");
  const [novaDataDoLembrete, setNovaDataDoLembrete] = useState("");

  const instanciaAxios = axios.create({
    baseURL: "https://localhost:44327",
    timeout: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  function handleSalvarNovoLembrete() {
    const tituloInvalido = novoTituloDoLembrete.length < 3;
    const dataVazia = novaDataDoLembrete.length < 10;

    const dataAtual = new Date();
    const hoje = new Date(Date.UTC(dataAtual.getUTCFullYear(), dataAtual.getUTCMonth(), dataAtual.getUTCDate() ));
    const [dia, mes, ano] = novaDataDoLembrete.split("/");    
    const dataConvertida = [ano,mes,dia].join("-");
    const dataLembrete = new Date(dataConvertida);

    if (tituloInvalido) {
      alert("Titulo não pode ser vazio!");
      return;
    }

    if (dataVazia) {
      alert("Data não pode ser vazia!");
      return;
    }

  if(dataLembrete.getTime() <= hoje.getTime()) {
    alert("Não é possivél adicionar lembretes para hoje, ou data que ja passaram, selecione uma data futura!");
    return;
  }
  
    const Lembrete = {
      titulo: novoTituloDoLembrete,
      data: novaDataDoLembrete,
    };

    instanciaAxios
      .post("/salvar", Lembrete)
      .then(function (response) {
        alert("salvo com sucesso!");
        obterLembretes()
      })
      .catch(function (error) {
        alert("um erro foi encontrado ao salvar");
        console.error(error);
      });
  }

  function handleRemoverLembrete(id: number) {
    instanciaAxios
      .delete("/excluir/" + id)
      .then(function (response) {
        alert("removido com sucesso!");
        obterLembretes()
      })
      .catch(function (error) {
        alert("um erro foi encontrado ao excluir!");
        console.error(error);
      });
  }

  function handleAtualizarLembrete(id: number) {
    instanciaAxios
    .put("/atualizar/" + id)
    .then(function (response) {
      alert("atualizado com sucesso!");
      obterLembretes()
    })
    .catch(function (error) {
      alert("um erro foi encontrado ao atualizar!");
      console.error(error);
    });
  }

  async function obterLembretes() {
    instanciaAxios
      .get("/listar")
      .then(function (response) {
        console.log(response.data)
        setLembretes(response.data)
      })
      .catch(function (error) {
        alert("Encontramos um erro ao atualizar a lista de lembretes atualize a página para tentar novamente");
        console.error(error);
      });
  }

  useEffect(() => {
    (async () => {
      await obterLembretes();
    })();
  }, []);

  return (
    <section className="lista-de-lembrete container">
      <header>
        <h2>Lista de Lembretes</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="titulo do lembrete"
            onChange={(e) => setNovoTituloDoLembrete(e.target.value)}
            value={novoTituloDoLembrete}
          />
          <input
            type="date"
            placeholder="data do lembrete"
            onChange={(e) => setNovaDataDoLembrete(e.target.value)}
            value={novaDataDoLembrete}
          />
          <button
            type="submit"
            data-testid="add-Lembrete-button"
            onClick={handleSalvarNovoLembrete}
          >
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {Lembretes.map((Lembrete) => (
            <li key={Lembrete.id}>
              <div
                className={Lembrete.expirado ? "completed" : ""}
                data-testid="Lembrete"
              >
                <p>{Lembrete.titulo}</p>
              </div>

              <button
                type="button"
                data-testid="remove-Lembrete-button"
                onClick={() => handleRemoverLembrete(Lembrete.id)}
              >
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
