import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ede9ed',
        width: '100%',
        height: 50,

        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,

        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {
      alignItems: 'center',
      flex: 1,
      fontSize: 16,
    },
})

export default CustomInput;