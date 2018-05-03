import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  SENDER_ID
} from 'react-native-dotenv'

import { Form, Header } from './components'

class App extends Component {
  state = {}
  componentWillMount() {
    firebase.initializeApp({
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: SENDER_ID
    })
  }
  render() {
    return (
      <View>
        <Header text="Auth" />
        <Form />
      </View>
    )
  }
}

export default App
