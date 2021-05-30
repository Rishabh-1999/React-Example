import React from "react";

export default function (props) {
  return (
    <ul>
      {props.todo.map((item, i) => {
        return (
          <li key={i}>
            {item} <button onClick={props.deleteTodo(i)}>x</button>
          </li>
        );
      })}
    </ul>
  );
}
