import { useState } from 'react';

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEdit(false);
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {isEdit ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        todo.text
      )}
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => setIsEdit(true)}>Edit</button>
      {isEdit && <button onClick={handleEdit}>Save</button>}
    </li>
  );
};

export default ToDoItem;
