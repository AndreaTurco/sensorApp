
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { decorator as sensors } from "react-native-sensors";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tickPerSecond: 3,
    };
  }

  render() {
      const { sensorsFound, Accelerometer, Gyroscope, Magnetometer } = this.props;
      // if (!Accelerometer || !Gyroscope) {
          // One of the sensors is still initializing
          // return null;
      // }

      // const time = {
      //     start: performance.now(),
      //     total: 2000
      // };

      const tick = now => {
          // time.elapsed = now - time.start;
          // if (time.elapsed < time.total) {
            setTimeout(function () {
                requestAnimationFrame(tick);
            }, 1000 / this.state.tickPerSecond);
          // }
      };
      
      // requestAnimationFrame(tick);

      return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

          <Text style={styles.welcome}>
              {(sensorsFound["Accelerometer"] && Accelerometer && 
                  `Acceleration has value: 
                  time:${Accelerometer.timestamp || 0} 
                  x:${Accelerometer.x || 0}
                  y:${Accelerometer.y || 0} 
                  z:${Accelerometer.z || 0} 
                  `) ||
              "Acceleration is not available"}
          </Text>
          <Text style={styles.welcome}>
              {(sensorsFound["Gyroscope"] && Gyroscope &&
              `Gyro has value: 
              time:${Gyroscope.timestamp || 0} 
                  x:${Gyroscope.x || 0}
                  y:${Gyroscope.y || 0} 
                  z:${Gyroscope.z || 0} 
              `) ||
              "Gyro is not available"}
          </Text>
          <Text style={styles.welcome}>
              {(sensorsFound["Magnetometer"] && Magnetometer &&
               `Magnetometer has value:
               time:${Magnetometer.timestamp || 0} 
                  x:${Magnetometer.x || 0}
                  y:${Magnetometer.y || 0} 
                  z:${Magnetometer.z || 0} 
               `) ||
              "Magnetometer is not available"}
          </Text>
      </View>
    );
  }
}


export default sensors({
    Accelerometer: {
        updateInterval: 500 // optional
    },
    Gyroscope: {
      updateInterval: 500 // optional
    },
    Magnetometer: {
      updateInterval: 500 // optional
    },
})(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
