import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TextButton = (props) => {
  const styles = StyleSheet.create({  
    textButton : {
      padding: 10, borderWidth: 1, borderColor: props.backgroundColor ?? 'green', borderRadius: 10,
      backgroundColor: props.backgroundColor ?? 'green',
      color: 'white',
    },
  });

  return (
      <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.textButton}>{props.title??'Button'}</Text>
      </TouchableOpacity>
  );

}

export default TextButton;
