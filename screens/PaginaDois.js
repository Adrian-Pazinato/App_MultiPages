import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from '../styles';

const PaginaDois = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textoCima}>Página Dois</Text>
            <Image source={require('../images/pikachu.jpg')} style={styles.image} />
            <TouchableOpacity
                style={Cores.botao}
                onPress={() => navigation.navigate('PaginaUm')}
            >
                <Text style={styles.botaoTexto}>Ir para a Página Um</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Cores.botao}
                onPress={() => navigation.navigate('PaginaTres')}
            >
                <Text style={styles.botaoTexto}>Ir para a Página Três</Text>
            </TouchableOpacity>
        </View>
    );
};

const Cores = StyleSheet.create({
    botao: {
        backgroundColor: '#FC9931',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },

});

export default PaginaDois;
