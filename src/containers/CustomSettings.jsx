import React, { Component } from 'react'

class CustomSettings extends Component {
  render() {
    return (
      <div className="container">
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              Set Custom Time
          </div>
            <div className="collapsible-body">
              Some settings
          </div>
          </li>
        </ul>
        <div className="divider"></div>
      </div>
    )
  }
}

export default CustomSettings
