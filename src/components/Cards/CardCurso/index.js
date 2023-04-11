import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

function CardCurso({ data }) {

    const navigation = useNavigation();

    function navigate(){
        navigation.navigate('CursoDetailScreem', data.id);
    }

    const id = data.id;

    return (
        <TouchableOpacity onPress={navigate} >
            <View style={styles.container}>

                <Image
                    source={require('../../../assets/fundo-curso.png')}
                    style={styles.cardImage}
                />

                <Text style={styles.cardText}>{data.nome}</Text>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 170,
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
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default CardCurso;



