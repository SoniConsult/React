import { ChangeEvent, useState } from "react";

type TodoApp= {
  id: string;
  text: string;
  completed: boolean;
};

const TodoApp = () => {
  const [todos, setTodos] = useState<TodoApp[]>([]);
  const [newTodo, setNewTodo] = useState("");

  
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (newTodo !== "") {
      const newTodoItem: TodoApp = {
        id: String(Math.random() * 100),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo(""); 
    }
  };

 
  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const CompleteTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
     setNewTodo(e.target.value);
  };
  return (
    <div id="form-container">
      <h1 id="todo-heading">Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => CompleteTodo(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;