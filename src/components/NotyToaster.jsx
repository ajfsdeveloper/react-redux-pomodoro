import Noty from 'noty'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotyToaster extends Component {
  render() {

    const { noty } = this.props

    if (noty.type && noty.message) {
      new Noty({
        text: noty.message,
        type: noty.type,
        theme: 'sunset',
        timeout: 3000
      }).show()
    }

    return <div></div>
  }
}

export default connect(state => ({ noty: state.noty }))(NotyToaster)
