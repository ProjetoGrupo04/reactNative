import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

function CardEncontro({ data }) {

    const navigation = useNavigation();

    const id = data.id;
    const name = data.descricao;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('SituacoesAprendizagensScreem', { id, name} )} >
            <View style={styles.container}>
                <Text style={styles.cardText}>{data.descricao}</Text>
                <Text style={styles.cardText}>{data.data}</Text>
                <Text style={styles.cardText}>{data.dia}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 130,
        backgroundColor: '#FFF',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 4,
    },
    card: {
        alignItems: 'center',
    },
    cardImage: {
        width: '90%',
        height: 110,
        borderRadius: 4,
        marginBottom: 0,
    },
    cardText: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        elevation: 10
    },
})

export default CardEncontro;



