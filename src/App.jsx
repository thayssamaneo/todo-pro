import { useState } from "react";

function App() {
  // Estado inicial com três tarefas de exemplo (atendendo ao Desafio Final)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Alinhar escopo do projeto To-Do Pro", completed: true },
    { id: 2, title: "Desenvolver protótipo da interface React", completed: false },
    { id: 3, title: "Testar a aplicação e validar o build", completed: false },
  ]);

  // Estado para controlar o campo de digitação de novas tarefas
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // Cálculo de Estado Derivado (sem criar estados desnecessários)
  const completedCount = tasks.filter((task) => task.completed).length;

  // Função para alternar o status de concluído/pendente de uma tarefa de forma IMUTÁVEL
  function toggleTaskStatus(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Função para adicionar uma nova tarefa (Manipulação de array com Imutabilidade)
  function handleAddTask(e) {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now(), // Gera um ID único
      title: newTaskTitle,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setNewTaskTitle(""); // Limpa o campo
  }

  return (
    <main className="container">
      <header className="header">
        <h1>To-Do Pro</h1>
        <p>Sistema corporativo para gestão de tarefas de alta eficiência.</p>
      </header>

      <section className="task-section">
        <h2>Minhas Tarefas</h2>
        
        {/* Formulário de cadastro de tarefas */}
        <form onSubmit={handleAddTask} className="task-form">
          <input
            type="text"
            placeholder="Digite o título da nova tarefa..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <button type="submit">Nova tarefa</button>
        </form>

        {/* Resumo/Métricas derivado do estado */}
        <div className="task-summary">
          <p>Total de tarefas: <strong>{tasks.length}</strong></p>
          <p>Concluídas: <strong>{completedCount}</strong></p>
          <p>Pendentes: <strong>{tasks.length - completedCount}</strong></p>
        </div>

        {/* Lista de Tarefas com Chaves Estáveis (key={task.id}) */}
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? "completed" : "pending"}`}
            >
              <span className="task-title">{task.title}</span>
              <div className="task-actions">
                <span className="status-badge">
                  {task.completed ? "Concluída" : "Pendente"}
                </span>
                <button
                  type="button"
                  onClick={() => toggleTaskStatus(task.id)}
                >
                  {task.completed ? "Reabrir" : "Concluir"}
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