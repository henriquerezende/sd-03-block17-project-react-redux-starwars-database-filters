import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';
import NumFilter from './NumFilter';
import FilterSetted from './FilterSetted';
import OrderFilters from './OrderFilters';

const columnOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const takeUnused = (completeList, usedListOfObj) => (
  completeList.filter((option) =>
    usedListOfObj.every(({ column }) => column !== option)
  )
);

const FilterBar = ({ numFilters }) => (
  <section>
    <section>
      <SearchBox />
    </section>
    <section>
      <NumFilter columnOptions={takeUnused(columnOptions, numFilters)} />
      {numFilters.map(({ column, comparison, value }, id) => (
        <FilterSetted
          id={id}
          key={column}
          column={column}
          comparison={comparison}
          value={value}
        />
      ))}
    </section>
    <section>
      <OrderFilters />
     </section>
  </section>
);

const mapStateToProps = ({ filters: { filterByNumericValues } }) => ({
  numFilters: [...filterByNumericValues],
});

FilterBar.propTypes = {
  numFilters: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired),
  ).isRequired,
}

export default connect(mapStateToProps)(FilterBar);
