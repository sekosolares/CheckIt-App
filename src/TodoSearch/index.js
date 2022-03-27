import React from 'react';
import './TodoSearch.css';



function TodoSearch({ searchValue, setSearchValue, loading }) {

      const onSearchValueChange = (event) => {
            console.log(event.target.value);
            setSearchValue(event.target.value);
      };

      return (
            <input disabled={loading} className="Search" placeholder="Filter tasks here..." onChange={onSearchValueChange} value={searchValue} />
      );
}

export { TodoSearch };