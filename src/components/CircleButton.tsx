import { Text,TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native'

interface Props {
    children: JSX.Element,
    style?: ViewStyle
}

const CircleButton = (props: Props): JSX.Element => {
    const { children, style } = props
    return (
        <TouchableOpacity style={[ styles.circleButton, style ]}>
            <Text style={styles.circleButtonlabel}>{ children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467FD3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOpacity: 0.75,
        shadowRadius: 8,
        textShadowOffset: { width: 0,  height: 8}
    },
    circleButtonlabel: {
        color: '#ffffff', 
        fontSize: 40,
        lineHeight: 48
    },
})

export default CircleButton