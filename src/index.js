import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


function App(props) {
  return (
    <h1>¡{props.saludo}, {props.nombre}!</h1>
  )
}


function withSaludo(WrappedComponent) {
  return function WrappedComonentWithSaludo(saludo) {
    return function ComponenteDeverdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </React.Fragment>
      )
    }
  }
}

// function withWhatever(WrappedComponent) {
//   return function ComponenteDeverdad(props) {
//     return (
//       <React.Fragment>
//         <WrappedComponent {...props} />
//         <p>Estamos acompañando al WrappedComponent</p>
//       </React.Fragment>
//     )
//   }
// }

const AppWithSaludo = withSaludo(App)("Aloha");

ReactDOM.render(
  <AppWithSaludo
    nombre="Juanita"
  />,
  // <App
  //   saludo="Buenas" nombre="Pepe"
  // />,
  document.getElementById('root')
);
