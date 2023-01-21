import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY", size = "NORMAL", bgColor, fgColor}) => {
  return (
    <Pressable 
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`, `container_${size}`],
            bgColor ? {backgroundColor: bgColor} : {}
            ]}>
        <Text 
            style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {}
            ]}
        >
            {text}
        </Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,

        padding: 15,
        marginVertical: 10,

        alignItems: 'center',
        borderRadius: 10,
    },

    container_PRIMARY:{
        backgroundColor: '#3B71F3',
    },

    container_TERTIARY: {

    },

    container_NORMAL: {
        width: '100%'
    },

    container_SMALL: {
        width: '32%'
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },

    text_TERTIARY: {
        color: 'gray',
    },
})