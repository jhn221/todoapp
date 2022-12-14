import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todos }) => {
  //스크롤을 이동하고 싶은 위치로
  useEffect(() => {
    if (window) window.scrollTo(0, 0);
  }, []);
  //예외 처리 안하면 오류남
  if(!todos) return null

    return (
      <div className="todo-list">
        {todos.map(todo => (
          <div className="list" key={todo.id}>
            * {todo.finished}
            <Link to={`/lists/${todo.id}`} >
              <h2>{todo.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    )
}

export default TodoList;