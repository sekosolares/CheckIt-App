import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
      return (
            <h2 className={`TodoCounter ${!!loading && "loading"}`}>You've completed {completedTodos} out of {totalTodos} Tasks.</h2>
      );
}

export { TodoCounter };