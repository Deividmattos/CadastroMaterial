import { useState } from 'react';

import "./app.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
  },
  {
    id: 2,
    text: "Ir para a academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,

  },
  ]);
  
  return(
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo)=>(
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">({todo.category})
              </p>
            </div>
            <button>Completar</button>
            <button>X</button>
          </div>
        ))}
      </div>
    </div>
   )
  
}

export default App
