import React from 'react';
import './index.css';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <h3>Search</h3>
      <form action="">
        <input type="text" value={props.search} onChange={props.updateMethod} />
        <label htmlFor="filter-stocked">Only show products on stock</label>
        <input
          type="checkbox"
          id="filter-stocked"
          onChange={props.onStockChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
