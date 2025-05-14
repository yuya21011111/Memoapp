import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import { Feather } from '@expo/vector-icons'
import Icon from '../../components/icon'

const handlePress = (): void => {
    // 編集処理
    router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年04月30日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos sequi distinctio ipsam provident corporis enim, laboriosam voluptatem ullam itaque reiciendis fugit, cupiditate minima aliquam totam! Dignissimos atque temporibus dolor sunt alias provident maxime, quidem, voluptatem voluptatibus ex accusamus, officia cumque eum? Repudiandae cumque perferendis labore consequuntur alias dicta facilis iste officia, necessitatibus rerum doloremque, fuga nisi modi nobis magnam eos itaque accusamus neque magni voluptatem eius maxime commodi cum sint. Qui quam corporis id saepe, quae dolor nam sit impedit, modi eveniet fuga repudiandae quia aut eligendi voluptatum. Dolores soluta quae temporibus sint commodi ipsum explicabo. Deleniti, odio ex.</Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 160, bottom: 'auto' }}>
              <Icon name='pencil' size={40} color='#ffffff'/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
}) 
export default Detail