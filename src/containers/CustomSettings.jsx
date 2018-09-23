import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/index'

class CustomSettings extends Component {

  state = {
    minute: '00',
    second: '00'
  }

  handleChange = (event) => {
    // console.log('handleChange', event.target.value.length)

    const { value } = event.target
    const newValue = value.length === 1 ? `0${value}` : value

    this.setState({ [event.target.id]: newValue })
  }

  handleSubmitForm = (event) => {
    event.preventDefault()

    const { minute, second } = this.state

    // console.log('form submitted', `${minute}:${second}`)
    // console.log('props', this.props)
    this.props.updateDisplayTime(`${minute}:${second}`)

    const elem = document.querySelector('.collapsible')
    const instance = window.M.Collapsible.getInstance(elem)
    instance.close(0)
  }

  componentDidMount() {
    window.$('.collapsible').collapsible()
    // console.log('collapsible')
  }

  render() {

    const { minute, second } = this.state

    return (
      <div className="container blue-grey-text text-darken-4">
        <ul className="collapsible z-depth-5">
          <li>
            <div className="collapsible-header cyan darken-3">
              <h5>Set Custom Time</h5>
            </div>
            <div className="collapsible-body">
              <h1>{`${minute}:${second}`}</h1>
              <form onSubmit={this.handleSubmitForm}>
                <p className="range-field">
                  <label htmlFor="minute">Minutes:</label>
                  <input type="range" id="minute" min="0" max="59" value={minute} onChange={this.handleChange} />
                </p>

                <p className="range-field">
                  <label htmlFor="second">Seconds:</label>
                  <input type="range" id="second" min={0} max={59} value={second} onChange={this.handleChange} />
                </p>

                <button className="waves-effect waves-light btn-large blue darken-4" type="submit">SUBMIT</button>
              </form>
            </div>
          </li>
        </ul>
        <div className="divider"></div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateDisplayTime: (updatedDisplayTimeString) => dispatch(actions.updateDisplayTime(updatedDisplayTimeString))
  }
}

export default connect(null, mapDispatchToProps)(CustomSettings)
