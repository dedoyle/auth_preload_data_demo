import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const List = ({ data }) => {
  console.log('list', data)
  return (
    <div>
      <Link to="/">to home</Link>
      <Link className="ml-20" to="/list">
        to list
      </Link>
      <div className="mt-24">List</div>
    </div>
  )
}

// List.propTypes = {
//   : PropTypes.
// }

export default List
