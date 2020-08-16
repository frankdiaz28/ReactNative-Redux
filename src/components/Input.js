import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({onChange, value, onSubmit}) => {
      return (
          <TextInput 
          style={styles.input}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          value={value}
          />
      )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor:'#eee',
        height: 34,
        alignSelf: 'stretch',
        padding: 10,
    }
})

export default Input