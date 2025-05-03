import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
const Detail = (): JSX.Element => {
    return (
        <View>
            <Header />
            <View>
                <Text>買い物リスト</Text>
                <Text>2025年04月30日 10:00</Text>
            </View>
            <ScrollView>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos sequi distinctio ipsam provident corporis enim, laboriosam voluptatem ullam itaque reiciendis fugit, cupiditate minima aliquam totam! Dignissimos atque temporibus dolor sunt alias provident maxime, quidem, voluptatem voluptatibus ex accusamus, officia cumque eum? Repudiandae cumque perferendis labore consequuntur alias dicta facilis iste officia, necessitatibus rerum doloremque, fuga nisi modi nobis magnam eos itaque accusamus neque magni voluptatem eius maxime commodi cum sint. Qui quam corporis id saepe, quae dolor nam sit impedit, modi eveniet fuga repudiandae quia aut eligendi voluptatum. Dolores soluta quae temporibus sint commodi ipsum explicabo. Deleniti, odio ex.</Text>
            </ScrollView>
            <CircleButton>＋</CircleButton>
        </View>
    )
}

export default Detail