import React from 'react';

export default function(props)
{
    return(
        <ul>
        {
          props.todo.map((item,i)=>
          {
            return (
              <li key={i}>{item} <button onClick={props.deleteli(i)}>x</button></li>
            )}
          )
        }
      </ul>
    );
}