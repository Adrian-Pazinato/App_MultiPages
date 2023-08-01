import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#26201B',
    },
    botaoTexto: {
        color: 'white',
        fontSize: 18,
    },
    image: {
        width: 300,
        height: 320,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    textoCima: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 60,
    },
});

export default styles;
