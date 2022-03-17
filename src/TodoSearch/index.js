import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';



function TodoSearch() {

      const { searchValue, setSearchValue } = React.useContext(TodoContext);

      const onSearchValueChange = (event) => {
            console.log(event.target.value);
            setSearchValue(event.target.value);
      };

      return (
            <input className="Search" placeholder="Filter tasks here..." onChange={onSearchValueChange} value={searchValue} />
      );
}

export { TodoSearch };