import React from 'react';

import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    unCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
} = useTodos();

return (
  <React.Fragment>
        <TodoHeader>
              <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
              />
              <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
              />
        </TodoHeader>

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
                    <TodoForm
                      addTodo={addTodo}
                      setOpenModal={setOpenModal}
                    />
              </Modal>
        )}

        <CreateTodoButton
              setOpenModal={setOpenModal}
        />
  </React.Fragment>
);
}

export default App;
