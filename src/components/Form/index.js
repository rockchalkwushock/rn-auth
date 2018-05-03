import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'

import { Button, Card, Input, Section, Spinner } from '../commons'

class Form extends Component {
  state = {
    email: '',
    error: false,
    loading: false,
    message: '',
    password: ''
  }
  onLoginFail = () => {
    this.setState(prevState => ({
      ...prevState,
      email: '',
      error: true,
      loading: false,
      message: 'Authentication Failed',
      password: ''
    }))
  }
  onLoginStart = () => {
    this.setState(prevState => ({
      ...prevState,
      error: false,
      loading: true,
      message: ''
    }))
  }
  onLoginSuccess = () => {
    this.setState(prevState => ({
      ...prevState,
      email: '',
      loading: false,
      message: '',
      password: ''
    }))
  }
  authenticate = () => {
    const { email, password } = this.state
    this.onLoginStart()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }
  renderButton = () =>
    this.state.loading ? (
      <Spinner size="small" />
    ) : (
      <Button onPress={this.authenticate}>Log In</Button>
    )
  render() {
    return (
      <Card>
        <Section>
          <Input
            label="Email"
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
            value={this.state.email}
          />
        </Section>
        <Section>
          <Input
            label="Password"
            onChangeText={password => this.setState({ password })}
            placeholder="pas$$w0rd"
            secure
            value={this.state.password}
          />
        </Section>
        <Text style={styles.root.text}>{this.state.message}</Text>
        <Section>{this.renderButton()}</Section>
      </Card>
    )
  }
}

const styles = {
  root: {
    text: {
      alignSelf: 'center',
      color: 'red',
      fontSize: 20
    }
  }
}

export default Form
