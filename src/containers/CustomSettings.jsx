import React, { Component } from 'react'

class CustomSettings extends Component {
  render() {
    return (
      <div className="container">
        <ul className="collapsible z-depth-5">
          <li>
            <div className="collapsible-header cyan darken-3">
              <span className="flow-text">Set Custom Time</span>
            </div>
            <div className="collapsible-body">
              <form action="#">
                <p className="range-field">
                  <label htmlFor="minute">Minutes:</label>
                  <input type="range" id="minute" min="0" max="60" />
                </p>

                <p className="range-field">
                  <label htmlFor="second">Seconds:</label>
                  <input type="range" id="second" min="0" max="60" />
                </p>
              </form>
            </div>
          </li>
        </ul>
        <div className="divider"></div>
      </div>
    )
  }
}

export default CustomSettings
