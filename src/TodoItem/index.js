import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
      return (
            <li className="TodoItem">
                  <span
                        className="TodoItem-Delete"
                        onClick={props.onDelete}>&times;</span>
                  <p className={`TodoItem-Text ${props.completed && 'Text-Completed'}`}> {props.text} </p>
                  <input
                        type="checkbox"
                        defaultChecked={props.completed}
                        className={`TodoItem-CheckBox ${props.completed ? 'CheckBox-Completed' : 'CheckBox-Pending'}`}
                        onClick={props.completed ? props.onUnComplete : props.onComplete}
                  />
            </li>
      );
}

export { TodoItem };