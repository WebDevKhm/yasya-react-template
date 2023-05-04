import { useState } from 'react';
import { FilterButton, WrapperFilters } from '../styled/styles.jsx';
import PropTypes from 'prop-types';

const Filters = ({ handleStateChangeFilters }) => {
  const [styleFilter, setStyleFilter] = useState('');

  const handleFiltering = (filterHandle) => {
    let newStyleFilter = '';
    switch (filterHandle) {
      case 'completed':
        newStyleFilter = 'done';
        handleStateChangeFilters('completed');
        break;
      case 'uncompleted':
        newStyleFilter = 'inprogress';
        handleStateChangeFilters('uncompleted');
        break;
      default:
        newStyleFilter = 'all';
        handleStateChangeFilters('all');
    }
    setStyleFilter(newStyleFilter);
  };

  const checkStyle = {
    background: '#E9D7FE',
    color: 'rgb(105, 65, 198)',
  };

  return (
    <WrapperFilters>
      <FilterButton
        style={styleFilter === 'all' ? checkStyle : {}}
        onClick={() => handleFiltering()}
      >
        All
      </FilterButton>
      <FilterButton
        style={styleFilter === 'done' ? checkStyle : {}}
        onClick={() => handleFiltering('completed')}
      >
        Completed
      </FilterButton>
      <FilterButton
        style={styleFilter === 'inprogress' ? checkStyle : {}}
        onClick={() => handleFiltering('uncompleted')}
      >
        In progress
      </FilterButton>
    </WrapperFilters>
  );
};

Filters.propTypes = {
  handleStateChangeFilters: PropTypes.func.isRequired,
};

export default Filters;
