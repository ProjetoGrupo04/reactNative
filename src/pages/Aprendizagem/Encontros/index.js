import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import CardEncontro from '../../../components/Cards/CardEncontro';


export default function Encontros() {
    const navigation = useNavigation();

    const [dataEncontro, setDataEncontro] = useState([]);
    const fetchDataEncontro = async () => {
        const resp = await fetch("http://academico3.rj.senac.br/api/Encontro");
        const dataEncontro = await resp.json();
        setDataEncontro(dataEncontro);
        console.log(dataEncontro.observacao + "\n");
    };
    // const fetchDataEncontro = async () => {
    //     fetch("http://academico3.rj.senac.br/api/Encontro")
    //     .then((resp)=>resp.json())
    //     .then((json) => setDataEncontro(json))
    //     .catch(()=>(console.log("Erro")))
    //     console.log(dataEncontro + "\n\n\n\n\n");
    // };

    useEffect(() => {
        fetchDataEncontro();
    }, []);

    // const encontros = [
    //     {
    //         id: 1,
    //         data: '09/02',
    //         descricao: 'Encontro 01',
    //         dia: 'segunda-feira'
    //     },
    //     {
    //         id: 2,
    //         data: '09/02',
    //         descricao: 'Encontro 02',
    //         dia: 'segunda-feira'
    //     },
    //     {
    //         id: 3,
    //         data: '09/02',
    //         descricao: 'Encontro 03',
    //         dia: 'segunda-feira'
    //     },
    //     {
    //         id: 4,
    //         data: '09/02',
    //         descricao: 'Encontro 04',
    //         dia: 'segunda-feira'
    //     },
    //     {
    //         id: 5,
    //         data: '09/02',
    //         descricao: 'Encontro 05',
    //         dia: 'segunda-feira'
    //     },
    //     {
    //         id: 6,
    //         data: '09/02',
    //         descricao: 'Encontro 06',
    //         dia: 'segunda-feira'
    //     },
    //     {
    //         id: 7,
    //         data: '09/02',
    //         descricao: 'Encontro 07',
    //         dia: 'segunda-feira'
    //     },
    //     {
    //         id: 8,
    //         data: '09/02',
    //         descricao: 'Encontro 08',
    //         dia: 'segunda-feira'
    //     },
    //     {
    //         id: 9,
    //         data: '09/02',
    //         descricao: 'Encontro 09',
    //         dia: 'segunda-feira'
    //     },
    //     {
    //         id: 10,
    //         data: '09/02',
    //         descricao: 'Encontro 10',
    //         dia: 'segunda-feira'
    //     }
    // ]

    return (
        <SafeAreaView nestedScrollEnabled={true} style={styles.container}>
            <FlatList
                data={dataEncontro}
                keyExtractor={(item) => item.id}
                // keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <CardEncontro data={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 7,
        backgroundColor: "#c2c2c2",
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        color: "#092C4C",
        marginLeft: 15
    },
})
