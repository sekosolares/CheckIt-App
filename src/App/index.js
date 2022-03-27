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
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodosEmptyResults } from '../TodosEmptyResults';

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
        <TodoHeader loading={loading}>
              <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
              />
              <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
              />
        </TodoHeader>

      <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchedText ={searchValue}

            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <TodosEmpty />}
            onEmptySearchedResults={(searchedText) => <TodosEmptyResults searchedText={searchedText} />}

            // Render Prop:
            render={todo => (
                  <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onUnComplete={() => unCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                  />
            )}
      >
      {/* Render Function:
            {todo => (
                  <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onUnComplete={() => unCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                  />
            )}
      */}
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
