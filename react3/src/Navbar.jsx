import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{props.title}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">{props.home}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{props.features}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{props.pricing}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">{props.disabled}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

Navbar.PropTypes={
    title: PropTypes.string,
    home: PropTypes.string,
    features: PropTypes.string,
    pricing: PropTypes.string,
    disabled: PropTypes.string,

}

Navbar.defaultProps={
    title: "set title here",
    home: "set title here",
    features: "set title here",
    pricing: "set title here",
    disabled: "set title here"

}