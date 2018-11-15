//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { AllSensorBridge } = NativeModules

export default {
  exampleMethod () {
    return AllSensorBridge.exampleMethod()
  },

  EXAMPLE_CONSTANT: AllSensorBridge.EXAMPLE_CONSTANT
}
