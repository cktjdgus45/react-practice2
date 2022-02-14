import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './todoList.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const LOCALSTORAGE_KEY = 'todo';
  const inputRef = useRef();
  const handleAddTodo = () => {
    const name = inputRef.current.value;
    if (name === ' ') return;
    setTodos(prevTodos => { return [...prevTodos, { name, complete: false, id: uuidv4() }] })
    inputRef.current.value = null;
  }
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  const toggleTodos = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const handleClear = () => {
    const newTodos = [...todos];
    const updated = newTodos.filter(todo => !todo.complete);
    setTodos(updated);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodos={toggleTodos} />
      <input ref={inputRef} type="text" />
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button onClick={handleClear}>Clear ToDo</button>
      <div>{todos.filter(todo => !todo.complete).length} left Todo</div>
    </>
  );
}

export default App;
