import React from 'react';
import './TodosEmptyResults.css';


function TodosEmptyResults({ searchedText }) {
      return (
            <li className="State-Empty-Results">No hay resultados para {searchedText}</li>
      );
}

export { TodosEmptyResults };