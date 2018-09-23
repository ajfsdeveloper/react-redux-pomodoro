import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import NotyToaster from './components/NotyToaster'
import TimerDisplay from './components/TimerDisplay'
import TimerButtons from './containers/TimerButtons'
import CustomSettings from './containers/CustomSettings'
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
    const { start, pause, resume } = this.props

    return (
      <Fragment>
        <NotyToaster />
        <Header />
        <TimerDisplay displayTime={this.props.displayTime} />
        <TimerButtons />
        {!(start || pause || resume) && <CustomSettings />}
        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  const { displayTime } = state.timer
  const { start, pause, resume } = state.activity

  return {
    displayTime,
    start,
    pause,
    resume
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDefaultTime: (defaultTime) => dispatch(actions.setDefaultTime(defaultTime)),
    updateDisplayTime: (newTime) => dispatch(actions.updateDisplayTime(newTime))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
