/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
        this.setState(previousState => (
            { isShowingText: !previousState.isShowingText }
        ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
        <Text>{this.props.text}</Text>
    );
  }
}

export default class App extends Component<Props> {
  render() {
    return (
        <View>
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigblue}>just bigblue</Text>
          <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
          <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
