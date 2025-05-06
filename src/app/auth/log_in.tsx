import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import Header from '../../components/Header'

const LogIn = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Text>Log In</Text>
                <TextInput value='Email Address' />
                <TextInput value='PassWord' />
                <View>
                    <Text>Submit</Text>
                </View>
                <View>
                    <Text>Not registered??</Text>
                    <Text>Sign up here!</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
}) 
export default LogIn