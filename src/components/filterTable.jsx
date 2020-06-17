import React from 'react'
import PropTypes from 'prop-types'

function filterTable(props) {
  return (
    <div>
      <input id='name-filter' data-testid='name-filter' type="text"/>
      <label htmlFor="name-filter">Search Planets</label>
    </div>
  )
}

filterTable.propTypes = {

}

export default filterTable
