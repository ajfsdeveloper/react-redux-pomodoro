import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimerDisplay from './components/TimerDisplay'

class App extends Component {
  render() {

    console.log('props', this.props)

    return (
      <div>
        <h1>Hey There!!</h1>
        <TimerDisplay displayTime={this.props.displayTime} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayTime: state.timer.displayTime
  }
}

export default connect(mapStateToProps)(App)
