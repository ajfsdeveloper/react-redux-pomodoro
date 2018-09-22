import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import NotyToaster from './components/NotyToaster'
import TimerDisplay from './components/TimerDisplay'
import Header from './components/Header'
import Footer from './components/Footer'

import * as actions from './store/actions/index'

class App extends Component {

  constructor(props) {
    super(props)

    props.setDefaultTime(props.defaultTime)

    // console.log('APP constructor', props)
  }

  componentDidMount() {
    // console.log('APP componentDidMount', this.props)
  }

  render() {
    return (
      <Fragment>
        <NotyToaster />
        <Header />

        <TimerDisplay displayTime={this.props.displayTime} />

        <button onClick={() => this.props.updateDisplayTime('13:45')}>UPDATE</button>
        <button onClick={() => this.props.startTimer()}>START</button>
        <button onClick={() => this.props.pauseTimer()}>PAUSE</button>
        <button onClick={() => this.props.resumeTimer()}>RESUME</button>
        <button onClick={() => this.props.stopTimer()}>STOP</button>

        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayTime: state.timer.displayTime
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDefaultTime: (defaultTime) => dispatch(actions.setDefaultTime(defaultTime)),
    updateDisplayTime: (newTime) => dispatch(actions.updateDisplayTime(newTime)),
    startTimer: () => dispatch(actions.startTimer('START')),
    stopTimer: () => dispatch(actions.stopTimer('STOP')),
    pauseTimer: () => dispatch(actions.pauseTimer()),
    resumeTimer: () => dispatch(actions.startTimer('RESUME'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
