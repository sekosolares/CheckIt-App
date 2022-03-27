import React from 'react';
import './TodoList.css';

function TodoList(props) {
      const renderFunc = props.children || props.render;

      return (
            <section className="TodoList-Container">
                  <ul>
                  {props.error && props.onError()}
                  {props.loading && props.onLoading()}

                  {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

                  {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchedResults(props.searchedText)}

                  {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
                  </ul>
            </section>
      );
}

export { TodoList };