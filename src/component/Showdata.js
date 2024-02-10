import React from 'react'
// import PropTypes from 'prop-types'

const Showdata = props => {
  return (
    <>
     <div className='resultbody-div'><h3 className='resultbody-div-h3'>{props.question}</h3> <p className='resultbody-div-p'>{props.answer}</p></div><hr className='resultbody-div-hr'></hr>
    </>
  )
}

// Showdata.propTypes = {}

export default Showdata