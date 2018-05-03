import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Header } from './components'

class App extends Component {
  state = {}
  render() {
    return (
      <View>
        <Header text="Auth" />
        <Text>App.js</Text>
      </View>
    )
  }
}

export default App
