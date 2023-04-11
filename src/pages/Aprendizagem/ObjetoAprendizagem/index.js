import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import HeaderUc from '../../../components/Header/HeaderUc';
import { CardObjetoAprendizagem } from '../../../components/Cards/CardObjetoAprendizagem';
import { CardAtividade } from '../../../components/Cards/CardAtividade';

export default function ObjetoAprendizagem(props) {
  const navigation = useNavigation();

  const [aprendizagem, setAprendizagem] = useState([]);

  const id = props.route.params.id;

  const objetos = [
    {
      id: 1,
      descricao: 'Objeto 1',
      icon: '',
    },
    {
      id: 2,
      descricao: 'Objeto 2',
      icon: '',
    },
    {
      id: 3,
      descricao: 'Objeto 3 ',
    },
  ]

  return (
    <>
      <HeaderUc data={props.route.params.descricao} />

      <View style={styles.container}>

        <View style={styles.contentTitle}>
          <Text style={styles.title}>Objetos de Aprendizagen</Text>
        </View>

        <View>
          <FlatList
            scrollEnabled={true}
            horizontal={false}
            data={objetos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardObjetoAprendizagem data={item} />}
          />
        </View>


        <View style={styles.contentTitle}>
          <Text style={styles.title}>Atividades</Text>
        </View>

        <View>
          <FlatList
            numColumns={1}
            scrollEnabled={false}
            horizontal={false}
            data={aprendizagem.atividades}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardAtividade data={item} />}
          />
        </View>

      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentTitle: {
    width: '95%',
    borderRadius: 50,
    backgroundColor: '#EF8F2F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
    marginTop: 5,
    elevation: 10,
    alignSelf: 'center'
  },
  title: {
    color: 'white',
    fontSize: 15,
    padding: 5
  },
  fabButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
})