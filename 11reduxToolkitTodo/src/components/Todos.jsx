import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import AddTodo from "./AddTodo";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editTodo, setEditTodo]= useState(null);

  return (
    <>
      <AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => setEditTodo(todo)}>Edit</button>
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </>
  );
}

export default Todos;
