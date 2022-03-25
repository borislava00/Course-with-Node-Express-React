import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import MOCK_TODOS from './model/mock-todos';

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS)
  return (
    <div className="App-header">
      <h1>React TODOs Demo</h1>
      <TodoInput onSubmitTodo={todo => setTodos(oldTodos => [...oldTodos, todo])} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;