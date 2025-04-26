import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View  style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
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
        backgroundColor: '#ffffff'
    },
    header: {
        backgroundColor: '#467FD3',
        height: 104,
        justifyContent: 'flex-end'
    },
    headerInner: {
        alignItems: 'center',
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255,255,255,0.7)'
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})

export default Index