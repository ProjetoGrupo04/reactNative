import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/pt-br';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CardEncontro({ data }) {

    const navigation = useNavigation();

    const id = data.id;
    const observacao = data.descricao;
    let diaSemana = moment(data.horaInicio).format('dddd')

    function primeiraLetraMaiuscula(dia) {
        return dia.substring(0, 1).toLocaleUpperCase() + dia.substring(1).toLocaleLowerCase();
    }

    return (
        <View style={styles.container}>
            <View style={styles.timeline}>
                {/* <View style={[styles.parte2,styles.shadowProp]}>
                    <Text style={styles.titulo}>{data.descricao}</Text>
                    <Text style={styles.titulo}>{data.data}</Text>
                    <Text style={styles.descricao}>{data.dia}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SituacoesAprendizagensScreem', { id, observacao })}>
                        <Text style={styles.detalhes}>Detalhe do encontro</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.parte2}>
                    <Text style={styles.titulo}>{primeiraLetraMaiuscula(diaSemana)}
                        , {moment(data.horaInicio).format('L')}</Text>
                    <Text style={styles.descricao}>{data.observacao}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SituacoesAprendizagensScreem', { id, observacao })}>
                        <Text style={styles.detalhes}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
    },
    timeline: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        padding: 5,
    },
    tituloTimeline: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 0,
        justifyContent: 'center'
    },
    parte2: {
        flex: 7,
        padding: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 0,
        marginBottom: 0,
        elevation: 10,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        color: "#092C4C",
    },
    descricao: {
        fontSize: 20,
        color: '#000',
        marginTop: 10,
    },
    data: {
        fontSize: 15,
        color: '#656565',
    },
    button: {
        backgroundColor: '#092C4C',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 20,
        paddingTop: 10,
        marginTop: 15,
        marginBottom: 0,
    },
    detalhes: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        paddingTop: 5,
    },
});

