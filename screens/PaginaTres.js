import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from '../styles';

const PaginaDois = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textoCima}>Página Tres</Text>
            <Image source={require('../images/raikou.jpg')} style={styles.image} />
            <TouchableOpacity
                style={Cores.botao}
                onPress={() => navigation.navigate('PaginaUm')}
            >
                <Text style={styles.botaoTexto}>Ir para a Página Um</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Cores.botao}
                onPress={() => navigation.navigate('PaginaDois')}
            >
                <Text style={styles.botaoTexto}>Ir para a Página Dois</Text>
            </TouchableOpacity>
        </View>
    );
};

const Cores = StyleSheet.create({
    botao: {
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },

});

export default PaginaDois;
