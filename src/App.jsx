import { useState } from "react";

function App() {
  // Estado inicial com três tarefas
  const [tarefa, setTarefa] = useState([
    { id: 1, titulo: "Ir ao mercado", completa: true },
    { id: 2, titulo: "Comprar um lápis novo", completa: false },
    { id: 3, titulo: "Assistir um filme no cinema", completa: false },
  ]);

  // Estado para controlar o campo de digitação de novas tarefas
  const [newTarefaTitulo, setNewTarefaTitulo] = useState("");

  // Cálculo de Estado Derivado
  const completaCount = tarefa.filter((tarefa) => tarefa.completa).length;

  // Função para alternar o status de concluído/pendente de uma tarefa de forma IMUTÁVEL
  function toggleTarefaStatus(tarefaId) {
    setTarefa((currentTarefa) =>
      currentTarefa.map((tarefa) =>
        tarefa.id === tarefaId ? { ...tarefa, completa: !tarefa.completa } : tarefa
      )
    );
  }

  // Função para adicionar uma nova tarefa 
  function handleAddTarefa(e) {
    e.preventDefault();
    if (!newTarefaTitulo.trim()) return;

    const newTarefa = {
      id: Date.now(), // Gera um ID único
      titulo: newTarefaTitulo,
      completa: false,
    };

    setTarefa((currentTarefa) => [...currentTarefa, newTarefa]);
    setNewTarefaTitulo(""); // Limpa o campo
  }

  return (
    <main className="container">
      <header className="header">
        <h1>To-Do Pro</h1>
        <p>Adicione novas tarefas e gerencie as atuais, Thayssa</p>
      </header>

      <section className="tarefa-section">
        <h2>Minhas Tarefas</h2>
        <p>Aqui você poderá gerenciar suas tarefas sabendo quais ainda precisa realizar.</p>
        
        <form onSubmit={handleAddTarefa} className="tarefa-form">
          <input
            type="text"
            placeholder="Digite o título da nova tarefa"
            value={newTarefaTitulo}
            onChange={(e) => setNewTarefaTitulo(e.target.value)}
          />
          <button type="submit">Nova tarefa</button>
        </form>

        <div className="tarefa-summary">
          <p>Total de tarefas: <strong>{tarefa.length}</strong></p>
          <p>Concluídas: <strong>{completaCount}</strong></p>
          <p>Pendentes: <strong>{tarefa.length - completaCount}</strong></p>
        </div>

        <ul className="tarefa-list">
          {tarefa.map((tarefa) => (
            <li
              key={tarefa.id}
              className={`tarefa-item ${tarefa.completa ? "completa" : "pending"}`}
            >
              <span className="tarefa-titulo">{tarefa.titulo}</span>
              <div className="tarefa-actions">
                <span className="status-badge">
                  {tarefa.completa ? "Concluída" : "Pendente"}
                </span>
                <button
                  type="button"
                  onClick={() => toggleTarefaStatus(tarefa.id)}
                >
                  {tarefa.completa ? "Reabrir" : "Concluir"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;