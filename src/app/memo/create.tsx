import { View, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { router } from 'expo-router'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../config'

const handlePress = (): void => {
    // topへ戻る
    addDoc(collection(db,'memos'),{
        bodyText: 'test'
    })
    .then(() => {
        console.log('success')
        router.back()
    })
    .catch((error) => {
        console.log(error)
    })
}

const Create = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value='' />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='check' size={40} color='#ffffff' />
            </CircleButton> 
        </KeyboardAvoidingView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24
    }
})


export default Create