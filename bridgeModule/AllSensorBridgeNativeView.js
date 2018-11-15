//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const AllSensorBridge = requireNativeComponent('AllSensorBridge', AllSensorBridgeView)

export default class AllSensorBridgeView extends Component {
  render () {
    return <AllSensorBridge {...this.props} />
  }
}

AllSensorBridgeView.propTypes = {
  exampleProp: React.PropTypes.any
}
