import React from "react";

export default function (props) {
  return (
    <input
      type="text"
      value={props.text}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
