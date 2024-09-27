import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleAtodo = () => {
    if (todoText.trim()) {
      addTodo({
        id: Date.now(),
        text: todoText,
        completed: false,
      });
      setTodoText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAtodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
