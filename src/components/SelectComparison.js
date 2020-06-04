import React, { Component } from 'react';

class SelectComparison extends Component {
  render() {
    const { changeFilter } = this.props;
    return (
      <div className='control'>
        <div className='select is-info'>
          <select
            data-testid='comparison-filter'
            id='comparison'
            onChange={(e) => changeFilter(e)}
          >
            <option value=''></option>
            <option value='maior que'>maior que</option>
            <option value='igual a'>igual a</option>
            <option value='menor que'>menor que</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectComparison;
