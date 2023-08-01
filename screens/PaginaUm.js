import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from '../styles';

const PaginaDois = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textoCima}>Página Um</Text>
            <Image source={require('../images/umbreon.jpg')} style={styles.image} />
            <TouchableOpacity
                style={Cores.botao}
                onPress={() => navigation.navigate('PaginaDois')}
            >
                <Text style={styles.botaoTexto}>Ir para a Página Dois</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Cores.botao}
                onPress={() => navigation.navigate('PaginaTres')}
            >
                <Text style={styles.botaoTexto}>Ir para a Página Tres</Text>
            </TouchableOpacity>
        </View>
    );
};

const Cores = StyleSheet.create({
    botao: {
        backgroundColor: 'purple',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },

});

export default PaginaDois;
