import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <>
      <label className={css.lable}>
        Find contact by name:
        <input
          className={css.input}
          type="text"
          placeholder="Search contacts..."
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
