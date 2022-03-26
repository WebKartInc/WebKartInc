import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">{props.tab1}</a>
            <a className="nav-link" href="/">{props.tab2}</a>
            <a className="nav-link" href="/">{props.tab3}</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    tab1: PropTypes.string.isRequired,
    tab2: PropTypes.string.isRequired, 
    tab3: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    tab1: 'Home',
    tab2: 'Services',
    tab3: 'Contact'
}
