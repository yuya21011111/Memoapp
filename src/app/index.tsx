import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text>Memo App</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>

            <View>
                <View>
                    <View>
                        <View>買い物リスト</View>
                        <View>2025年4月26日 15:00</View>
                    </View>
                    <View>
                        <View>X</View>
                    </View>
                </View>

                <View>
                    <View>
                        <View>買い物リスト</View>
                        <View>2025年4月26日 15:00</View>
                    </View>
                    <View>
                        <View>X</View>
                    </View>
                </View>

                <View>
                    <View>
                        <View>買い物リスト</View>
                        <View>2025年4月26日 15:00</View>
                    </View>
                    <View>
                        <View>X</View>
                    </View>
                </View>
            </View>
            <View>
                <Text>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Index