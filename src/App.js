/* eslint-disable no-nested-ternary */

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

import { Button, Form, Header, Spinner } from './components'

class App extends Component {
  state = {
    loggedIn: null
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: SENDER_ID
    })

    firebase
      .auth()
      .onAuthStateChanged(
        user =>
          user
            ? this.setState({ loggedIn: true })
            : this.setState({ loggedIn: false })
      )
  }
  renderContent = () =>
    this.state.loggedIn === null ? (
      <Spinner size="large" />
    ) : this.state.loggedIn ? (
      <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
    ) : (
      <Form />
    )
  render() {
    return (
      <View>
        <Header text="Auth" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
