import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import Button from '../../components/Button'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config'

const handlePress = (email: string, password: string): void => {
    // ログイン処理予定
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
         router.replace('/memo/list')
    })
    .catch((error) => {
        const { code, message} = error
        console.log(code, message)
        Alert.alert(message)
    })
}
const LogIn = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [PassWord, setPassWord] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput textContentType='emailAddress' placeholder='Email Address' keyboardType='email-address' autoCapitalize='none' onChangeText={(text) => { setEmail(text) }} style={styles.input} value={email} />
                <TextInput textContentType='password' placeholder='PassWord' secureTextEntry autoCapitalize='none' onChangeText={(text) => { setPassWord(text) }} style={styles.input} value={PassWord} />
                <Button label='Submit' onPress={()=> { handlePress(email, PassWord) }} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered??</Text>
                    <Link href='/auth/sign_up' asChild replace>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign up here!</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#ffffff',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    button: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        color: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
    footer: {
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }

})
export default LogIn