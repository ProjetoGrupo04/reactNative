import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';


import { useNavigation } from '@react-navigation/native';

export default function Participantes() {
    const navigation = useNavigation();

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("http://academico3.rj.senac.br/api/Estudante/FiltrarEstudanteByGrupoId/1");
            const data = await resp.json();
            setData(data);
        };

        fetchData();
    }, []);

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.main}>
                <Text style={{fontWeight:'bold', fontSize:24}}>Participantes</Text>
                <Text style={{fontSize:18, margin:2}}>{item[1].usuario?.nomeCompleto}</Text>
                <Text style={{fontSize:18, margin:2}}>{item[2].usuario?.nomeCompleto}</Text>
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