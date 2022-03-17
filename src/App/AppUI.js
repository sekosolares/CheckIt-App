import React from 'react';
import './App.css';

import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';

function AppUI() {
      const {
            error,
            loading,
            searchedTodos,
            completeTodo,
            unCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
      } = React.useContext(TodoContext);

      return (
            <React.Fragment>
            <TodoCounter/>

            <TodoSearch/>

            <TodoList>
            {error && <li className="App-State State-Error">Something Went Wrong...</li>}
            {loading && <li className="App-State State-Loading">Loading content. Please wait a bit...</li>}
            {(!loading && !searchedTodos.length) && <li className="App-State">Let's add a new Task! 😊</li>}

            {searchedTodos.map(todo => (
            <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onUnComplete={() => unCompleteTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
            />
            ))}
            </TodoList>

            {openModal && (
                  <Modal>
                        <TodoForm/>
                  </Modal>
            )}

            <CreateTodoButton
                  setOpenModal={setOpenModal}
            />
      </React.Fragment>
      );
}

export { AppUI };