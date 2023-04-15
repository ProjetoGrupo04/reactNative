import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function CardEncontro({ data }) {

    const navigation = useNavigation();

    const id = data.id;
    const name = data.descricao;

    return (

        <View style={styles.container}>
            <View style={styles.timeline}>
                <View style={[styles.parte2,styles.shadowProp]}>
                    <Text style={styles.titulo}>{data.descricao}</Text>
                    <Text style={styles.titulo}>{data.data}</Text>
                    <Text style={styles.descricao}>{data.dia}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SituacoesAprendizagensScreem', { id, name })}>
                        <Text style={styles.detalhes}>Detalhe do encontro</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.parte2}>
                       <Text style={styles.titulo}>{Moment(item.horaInicio).format('dddd')}
                         , {Moment(item.horaInicio).format('L')}</Text>
                       <Text style={styles.descricao}>{item.observacao}</Text>
                       <Text style={styles.descricao}>Situação de aprendizagem</Text>
                       <Text style={styles.descricao}>Objeto de aprendizagem</Text>
                       <Text style={styles.descricao}>Atividade</Text>
                       <TouchableOpacity style={styles.button}>
                         <Text style={styles.detalhes}>Detalhe do encontro</Text>
                       </TouchableOpacity>
                     </View> */}
            </View>
        </View>
    );
}

export default CardEncontro;

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

