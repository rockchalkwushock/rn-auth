import React, { Component } from 'react'

import { Button, Card, Input, Section } from '../commons'

class Form extends Component {
  state = {
    text: ''
  }
  render() {
    return (
      <Card>
        <Section>
          <Input
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </Section>
        <Section />
        <Section>
          <Button>Log In</Button>
        </Section>
      </Card>
    )
  }
}

export default Form
