import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import Button from '../../components/Button'

const handlePress = (): void => {
    // 会員登録処理予定
    router.push('/memo/list')
}
const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [PassWord, setPassWord] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput textContentType='emailAddress' placeholder='Email Address' keyboardType='email-address' autoCapitalize='none' onChangeText={(text) => { setEmail(text) }} style={styles.input} value={email} />
                <TextInput textContentType='password' placeholder='PassWord' secureTextEntry autoCapitalize='none' onChangeText={(text) => { setPassWord(text) }} style={styles.input} value={PassWord} />
                <Button label='Submit' onPress={handlePress} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Link href='/auth/log_in' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log in.</Text>
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
export default SignUp