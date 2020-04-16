import React from "react";
import "./styles.css";
import TodoItem from "../todoitem";

export default function App() {
  return (
    <div className="Todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
