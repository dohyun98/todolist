import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

// App.js에서 todos 배열 안에 있는 객체를 props로 내려받음.
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
        // 여러 종류의 값을 전달해야 하는 경우 -> 객체 통째로 전달하는 편이 성능 최적화 할 때 편함.
      ))}
    </div>
  );
};
export default TodoList;
