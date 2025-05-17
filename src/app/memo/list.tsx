import { View, Text, StyleSheet } from 'react-native'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import { Feather } from '@expo/vector-icons'
import Icon from '../../components/icon'
import { router, useNavigation } from 'expo-router'

const handlePress = (): void => {
    // 新規作成処理
    router.push('/memo/create')
}
const List = (): JSX.Element => {
    const navigation = useNavigation()
    navigation.setOptions({
        headerRight: () =>{ return <Text>Test</Text> }
    })
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton onPress={handlePress}>
              <Icon name='plus' size={40} color='#ffffff'/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
})

export default List