import { useState, useEffect } from 'react'

import './style.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

export function ListaDeLembretes() {
  const dataAtual = new Date();
  const diaAtual= String(dataAtual.getDate()).padStart(2, '0');
  const mesAtual = String(dataAtual.getMonth()+1).padStart(2,"0");
  const anoAtual = dataAtual.getFullYear();

  const [Lembretes, setLembretes] = useState<Lembrete[]>([]);
  const [novoTituloDoLembrete, setNovoTituloDoLembrete] = useState('');
  const [novaDataDoLembrete, setNovaDataDoLembrete] = useState('');

  function handleSalvarNovoLembrete() {
    if (!novoTituloDoLembrete && !novaDataDoLembrete) return false;

    const Lembrete = {
      titulo: novoTituloDoLembrete,
      data: novaDataDoLembrete,
    }

    //enviar para o back
  }

  function handleRemoverLembrete(id: number) {
   //enviar para o back
  }

  function handleAtualizarLembrete(id: number) {
    //enviar para o back
   }

  async function obterLembretes() {
    //chamo o back para listar todos os lembretes
  }

  useEffect(() => {
    (async () => { await obterLembretes(); })();
  }, [])

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
          <button type="submit" data-testid="add-Lembrete-button" onClick={handleSalvarNovoLembrete}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {Lembretes.map(Lembrete => (
            <li key={Lembrete.id}>
              <div className={Lembrete.expirado ? 'completed' : ''} data-testid="Lembrete" >
                <p>{Lembrete.titulo}</p>
              </div>

              <button type="button" data-testid="remove-Lembrete-button" onClick={() => handleRemoverLembrete(Lembrete.id)}>
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  )
}