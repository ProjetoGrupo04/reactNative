import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import CardEncontro from '../../../components/Cards/CardEncontro';

export default function Encontros() {
    const navigation = useNavigation();
    
    const encontros = [
        {
            id: 1,
            data: '09/02',
            descricao: 'Encontro 01',
            dia: 'segunda-feira'
        },
        {
            id: 2,
            data: '09/02',
            descricao: 'Encontro 02',
            dia: 'segunda-feira'
        },
        {
            id: 3,
            data: '09/02',
            descricao: 'Encontro 03',
            dia: 'segunda-feira'
        },
        {
            id: 4,
            data: '09/02',
            descricao: 'Encontro 04',
            dia: 'segunda-feira'
        },
        {
            id: 5,
            data: '09/02',
            descricao: 'Encontro 05',
            dia: 'segunda-feira'
        },
        {
            id: 6,
            data: '09/02',
            descricao: 'Encontro 06',
            dia: 'segunda-feira'
        },
        {
            id: 7,
            data: '09/02',
            descricao: 'Encontro 07',
            dia: 'segunda-feira'
        },
        {
            id: 8,
            data: '09/02',
            descricao: 'Encontro 08',
            dia: 'segunda-feira'
        },
        {
            id: 9,
            data: '09/02',
            descricao: 'Encontro 09',
            dia: 'segunda-feira'
        },
        {
            id: 10,
            data: '09/02',
            descricao: 'Encontro 10',
            dia: 'segunda-feira'
        }
    ]

    return (
        <View>
            <FlatList
                numColumns={3}
                horizontal={false}
                data={encontros}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CardEncontro data={item} />}
            />
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})