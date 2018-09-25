Installation react-native-sensor

$ npm install react-native-sensors --save
Automatic installation

$ react-native link react-native-sensors

Option: With CocoaPods (iOS only)

Add the following to your Podfile and run $ pod install:

pod 'RNSensors', :path => '../node_modules/react-native-sensors'
Manual installation
iOS

    In XCode, in the project navigator, right click Libraries ➜ Add Files to [your project's name]
    Go to node_modules ➜ react-native-sensors and add RNSensors.xcodeproj
    In XCode, in the project navigator, select your project. Add libRNSensors.a to your project's Build Phases ➜ Link Binary With Libraries
    Run your project (Cmd+R)<

Android

    Open up android/app/src/main/java/[...]/MainApplication.java

    Add import com.sensors.RNSensorsPackage; to the imports at the top of the file
    Add new RNSensorsPackage() to the list returned by the getPackages() method

    Append the following lines to android/settings.gradle:

    include ':react-native-sensors'
    project(':react-native-sensors').projectDir = new File(rootProject.projectDir,  '../node_modules/react-native-sensors/android')

    Insert the following lines inside the dependencies block in android/app/build.gradle:

      implementation project(':react-native-sensors')

