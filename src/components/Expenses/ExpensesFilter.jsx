import React from 'react';
import './ExpensesFilter.css';

function ExpensesFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  // Create a range of years (2019 to 2030)
  const startYear = 2019;
  const endYear = 2030;
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
