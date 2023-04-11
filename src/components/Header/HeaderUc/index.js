import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function HeaderUc(props) {
    const navigation = useNavigation();

    return (
        // <SafeAreaView>
        <View style={styles.header}>
            <View style={styles.logo}>
                <TouchableOpacity style={styles.buttonIcon} onPress={() => navigation.goBack()}>
                    <FontAwesome
                        name="arrow-left"
                        size={20}
                        color="#205395"
                    />
                </TouchableOpacity>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>
                        {props.data}
                    </Text>
                </View>

            </View>

            <View style={styles.botoes}>
                {/* <TouchableOpacity style={styles.buttonIcon}>
                        <Feather name="message-circle" size={20} color="#FFF" />
                    </TouchableOpacity> */}

                <TouchableOpacity style={styles.buttonIcon} onPress={() => navigation.navigate("NotificacaoScreem")}>
                    <FontAwesome name="bell" size={20} color="#205395" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonIcon} >
                    <FontAwesome name="gear" size={22} color="#205395" />
                </TouchableOpacity>

            </View>

        </View>
        // </SafeAreaView>
    );
}

export default HeaderUc;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#205395',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        height: 60,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonIcon: {
        width: 30,
        height: 30,
        backgroundColor: '#EF8F2F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10,
        elevation: 10
    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        elevation: 10
    },
    icon: {
        marginRight: 17,
        elevation: 10
    },

});