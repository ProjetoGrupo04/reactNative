import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';


import { useNavigation } from '@react-navigation/native';

export default function Participantes() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Participantes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})