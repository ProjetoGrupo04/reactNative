import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export function CardSituacaoAprendizagem({ data }) {
    const navigation = useNavigation();

    const [isSelected, setSelection] = useState(false);

    const id = data.id;
    const descricao = data.descricao;

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ObjetoAprendizagenScreem", { id, descricao })}>
            <View style={styles.start}>
                <TouchableOpacity>
                    <Feather
                        name="book-open"
                        color="orange"
                        size={20}
                        style={{marginRight: 15}}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>
                    {data.descricao}
                </Text>
            </View>

            <View style={styles.end}>
                <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        backgroundColor: '#205395',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 3,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#8a8a8a',
    },
    text: {
        color: '#FFF',
        // fontSize: 15,
        // fontWeight: 'bold'
    },
    start:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    end: {
        width: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkBox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: '#FFF'

    }
});