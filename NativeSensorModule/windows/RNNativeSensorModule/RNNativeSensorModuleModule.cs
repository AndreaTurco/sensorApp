using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Native.Sensor.Module.RNNativeSensorModule
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNNativeSensorModuleModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNNativeSensorModuleModule"/>.
        /// </summary>
        internal RNNativeSensorModuleModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNNativeSensorModule";
            }
        }
    }
}
