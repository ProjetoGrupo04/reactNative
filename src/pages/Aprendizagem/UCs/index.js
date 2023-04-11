import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';

import Header from '../../../components/Header';

import { useNavigation } from '@react-navigation/native';

import CardUc from '../../../components/Cards/CardUc';
import FabButton from '../../../components/Buttons/FabButton';

export default function UCs() {
    const navigation = useNavigation();
    const [ucs, setUcs] = useState([]);

    const unidadesCurriculares = [
        {
            id: 1,
            descricao: 'Português',
        },
    ]

    return (
        <>
            <Header />
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={unidadesCurriculares}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <CardUc data={item} />}
                />

                <FabButton />
                {/* </ScrollView> */}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6,
        //backgroundColor: '#000',
    },
    sectionCard: {
        //backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    }
})