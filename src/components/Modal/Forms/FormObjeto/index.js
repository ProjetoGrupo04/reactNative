import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, ScrollView, FlatList, TextInput } from 'react-native';

import * as DocumentPicker from 'expo-document-picker';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function FormObjeto({ id }) {
    const { user } = useContext(AuthContext);

    const navigation = useNavigation();

    //Modal
    const [modalVisible, setModalVisible] = useState(false);

    //Objeto Aprendizagen
    const [descricao, setDescricao] = useState('');
    let [file, setFile] = useState([]);
    const [grauDificuldadeId, setGrauDificuldadeId] = useState('');
    const [usuarioId, setUsuarioId] = useState(user.id);
    const [aprendizagens, setAprendizagens] = useState(id);

    async function getFiles() {
        let result = await DocumentPicker.getDocumentAsync({});

        setFile(result);
        console.log(file.mimeType);
        result = null;

        console.log(file);
    }

    const upload = async () => {
        
        navigation.navigate("ObjetoAprendizagenScreem", { id, descricao })

        if (descricao == '' && file == '' && grauDificuldadeId == '') {
            alert('Prencha todos os campos!!');
            return;
        }

        if (file.cancelled) {
            return;
        }

        let localUri = file.uri;
        // setFile(localUri);
        let filename = localUri.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `DocumentPicker/${match[1]}` : `DocumentPicker`;

        let formData = new FormData();
        formData.append('descricao', descricao);
        formData.append('file', { uri: localUri, name: filename, type });
        formData.append('grauDificuldadeId', grauDificuldadeId);
        formData.append('usuarioId', usuarioId);
        formData.append('aprendizagens', aprendizagens);

        await api.post('/api/objetoAprendizagem/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        setModalVisible(false);
        file = null;
        descricao = null;
        grauDificuldadeId = null;
        usuarioId = null;
        aprendizagens = null;
        
    }



    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.titleModal}>Cadastro de Objeto</Text>

                        {/* <Text style={styles.modalText}>SituacaoAprendizagemId: {id}</Text> */}

                        <View style={styles.inputLabel}>
                            <TextInput
                                autoFocus={true}
                                placeholder="Descrição"
                                style={styles.input}
                                placeholderTextColor="#000"
                                value={descricao}
                                onChangeText={setDescricao}
                            />
                        </View>

                        <View style={styles.inputLabel}>
                            <TextInput
                                placeholder="Dificuldade"
                                style={styles.input}
                                placeholderTextColor="#000"
                                value={grauDificuldadeId}
                                onChangeText={setGrauDificuldadeId}
                            />
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => getFiles()}>
                            <Text>Upload</Text>
                        </TouchableOpacity>


                        <View style={styles.buttons}>
                            <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonOpen]} onPress={() => upload()}>
                                <Text style={styles.textStyle}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={styles.fabButton}
                onPress={() => setModalVisible(true)}>
                <Feather
                    name="book"
                    size={20}
                    color="#FFF"
                />
            </TouchableOpacity>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#205395',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    titleModal: {
        fontSize: 20,
        textAlign: 'left',
        color: '#FFF',
        marginBottom: 20
    },
    fabButton: {
        elevation: 10,
        position: 'absolute',
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#205395',
        elevation: 2,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3fffa3',
    },
    buttonOpen: {
        backgroundColor: '#205395',
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
    },
    inputLabel: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        height: 60,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 12,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'orange',
        paddingHorizontal: 8,
        color: '#000',
    },
})