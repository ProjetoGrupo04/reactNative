import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';


import { useNavigation } from '@react-navigation/native';

export default function DescricaoUC() {

    const [data, setData] = useState(null);
    const [UcDescription, setUcDescription] = useState("N/A");

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("http://academico3.rj.senac.br/api/PlanejamentoUC/FiltrarPlanejamentoUCByGrupoId/1");
            const data = await resp.json();
            setUcDescription(data.grupo?.unidadeCurricular?.nome);
            setData(data);
        };

        fetchData();
    }, []);

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.main}>
                <Text style={{fontWeight:'bold', fontSize:24}}>Descrição</Text>
                <Text style={{fontSize:18}}>{item?.descricao}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <RenderItem item={data} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main: {
        padding: 5,
        margin: 10
    }
})