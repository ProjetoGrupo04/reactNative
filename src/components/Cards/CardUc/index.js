import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import CircularProgress from 'react-native-circular-progress-indicator';

function CardUc({ data }) {
    const navigation = useNavigation();

    const id = data.id;
    const descricao = data.descricao;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('UcDetailScreem', { id, descricao })} >
            <View style={styles.container}>

                <CircularProgress
                    radius={30}
                    value={25}
                    textColor='blue'
                    fontSize={20}
                    valueSuffix={'%'}
                    inActiveStrokeColor={'#000'}
                    activeStrokeColor={'#EF8F2F'}
                    // activeStrokeWidth={10}
                    // inActiveStrokeWidth={14}
                    inActiveStrokeOpacity={0.2}
                    progressValueColor={'#000'}
                />
                <Text style={styles.cardText}>{data.descricao}</Text>

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
        borderRadius: 5,
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
    },
})

export default CardUc;



