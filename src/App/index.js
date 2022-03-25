import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


function App() {
  const [state, setState] = React.useState('Estado compartido');

  return (
      <React.Fragment>
        <TodoHeader>
          <TodoCounter />
          <TodoSearch />
        </TodoHeader>
        <TodoList>
          <TodoItem state={state} />
        </TodoList>
      </React.Fragment>
  )
}

function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  );
}

function TodoList({ children }) {
  return (
    <ul>
      {children}
    </ul>
  );
}

function TodoCounter() {
  return <p>Counter</p>
}

function TodoSearch() {
  return <p>Search</p>
}

function TodoItem({ state }) {
  return <p>Item {state}</p>
}


// function App() {
//   return (
//     <TodoProvider>
//       <AppUI/>
//     </TodoProvider>
//   );
// }

export default App;
