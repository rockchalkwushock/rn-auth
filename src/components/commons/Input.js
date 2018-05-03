import React from 'react'
import { Text, TextInput, View } from 'react-native'

type Props = {
  label: string,
  onChangeText: Function,
  value: string
}

const Input = (props: Props) => (
  <View>
    <Text>{props.label}</Text>
    <TextInput
      onChangeText={props.onChangeText}
      style={{ height: 20, width: 100 }}
      value={props.value}
    />
  </View>
)

export default Input
