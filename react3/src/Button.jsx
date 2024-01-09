import React from 'react'
import PropTypes from "prop-types"
function Button(props) {
    let {children}= props
    return (
       <>
      
        <div>
            <button>{children}</button>
        </div>
        </>
    )
}


export default Button


