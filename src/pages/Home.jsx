import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const Home = ({ data }) => {
  console.log('home', data)
  return (
    <div>
      <Link to="/">to home</Link>
      <Link className="ml-20" to="/list">
        to list
      </Link>
      <div className="mt-24">Home</div>
    </div>
  )
}

// Home.propTypes = {
//   : PropTypes.
// }

export default Home
