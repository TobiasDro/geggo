import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import Logo from '../../assets/Logo_1.png';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    }
    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password pressed")
    }
    const onSignInFacebook = () => {
        console.warn("facebook")
    }
    const onSignInGoogle = () => {
        console.warn("Google")
    }
    const onSignInApple = () => {
        console.warn("Apple")
    }
    const onSignUpPressed = () => {
        console.warn("Sign Up")
    }
    

    return (
    <View style={styles.root}>
        <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode="contain" 
        />

        <CustomInput 
            placeholder='Username' 
            value={username} 
            setValue={setUsername}
            secureTextEntry={false}
        />
        <CustomInput 
            placeholder='Password' 
            value={password} 
            setValue={setPassword} 
            secureTextEntry={true}
        />

        <CustomButton 
            text="Sign In"
            onPress={onSignInPressed}
            size="NORMAL" 
            type="PRIMARY"
            bgColor="#3c84fe"
        />

        <CustomButton 
            text="Forgot password?"
            onPress={onForgotPasswordPressed} 
            type="TERTIARY"
        />
        
        <View style={styles.LoginFirmen}>
            <CustomButton 
                text="Facebook"
                onPress={onSignInFacebook}
                bgColor="#3b5998"
                fgColor="white"
                size="SMALL"
            />

            <CustomButton 
                text="Google"
                onPress={onSignInGoogle}
                bgColor="lightgray"
                fgColor="black"
                size="SMALL"
            />

            <CustomButton 
                text="Apple"
                onPress={onSignInApple}
                bgColor="#262426"
                fgColor="white"
                size="SMALL"
            />
        </View>

        <CustomButton 
            text="Don't have an account? Create one"
            onPress={onSignUpPressed}    
            type="TERTIARY"
            fgColor="#738cbd"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    LoginFirmen: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
}) 

export default SignInScreen