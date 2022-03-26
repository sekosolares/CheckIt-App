import React from 'react';
import './TodoForm.css';

function TodoForm({
      addTodo,
      setOpenModal
}) {
      const [newTodoValue, setNewTodoValue] = React.useState('');


      const onCancel = () => {
            setOpenModal(false);
      };

      const onSubmit = (event) => {
            event.preventDefault();
            addTodo(newTodoValue);
            setOpenModal(false);
      };

      const onChange = (event) => {
            setNewTodoValue(event.target.value);
      };

      return (
            <form onSubmit={onSubmit}>
                  <label>Ingresa el TODO:</label>
                  <textarea
                        value={newTodoValue}
                        onChange={onChange}
                        placeholder="Make a boiling egg."
                  />
                  <div className="TodoForm-buttonContainer">
                        <button
                        accessKey="c"
                        className="TodoForm-button TodoForm-button-cancel"
                        type="button" onClick={onCancel}><u>C</u>ancelar</button>

                        <button
                        accessKey="d"
                        className="TodoForm-button TodoForm-button-add"
                        type="submit">Aña<u>d</u>ir</button>
                  </div>
            </form>
      );
}

export { TodoForm };