import React from 'react'
// import PropTypes from 'prop-types'

function Loading(props) {
  console.log(props.error)
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

// Loading.propTypes = {
//   : PropTypes.
// }

export default Loading
