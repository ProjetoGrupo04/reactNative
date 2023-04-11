import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList, ProgressBarAndroid } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import HeaderUc from '../../../components/Header/HeaderUc';

import CircularProgress from 'react-native-circular-progress-indicator';
import * as Progress from 'react-native-progress';
import TopTabsUc from '../TopTabsUc';

export default function UcDetails() {
    const navigation = useNavigation();

    const [value, setValue] = useState(0);

    const [uc, setUc] = useState([]);

    const descricao = 'Português Instrumental';

    return (
        <>
            <HeaderUc data={descricao} />
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.sectionProgressBar}>
                        <View style={styles.progressBar}>
                            <Text style={styles.progressBarTitle}>Meu progresso: </Text>
                            <Progress.Bar
                                progress={0.3}
                                width={370}
                                height={12}
                                style={{backgroundColor: '#D9D9D9'}}
                            />
                        </View>
                        <View style={styles.progressBar}>
                            <Text style={styles.progressBarTitle}>Progresso da uc: </Text>
                            <Progress.Bar
                                progress={0.5}
                                width={370}
                                height={12}
                                color={'green'}
                                style={{backgroundColor: '#D9D9D9'}}
                            />
                        </View>
                    </View>
                    <View style={styles.sectionProgress}>
                        <View style={styles.progressCircle}>
                            <Text style={styles.progressTitle}>Atividades</Text>
                            <CircularProgress
                                radius={40}
                                value={50}
                                textColor='#FFF'
                                fontSize={20}
                                valueSuffix={'%'}
                                inActiveStrokeColor={'#FFF'}
                                activeStrokeColor={'#EF8F2F'}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'#FFF'}
                                // style={{elevation: 10}}
                            />
                        </View>

                        <View style={styles.progressCircle}>
                            <Text style={styles.progressTitle}>Avaliações</Text>
                            <CircularProgress
                                radius={40}
                                value={25}
                                textColor='blue'
                                fontSize={20}
                                valueSuffix={'%'}
                                inActiveStrokeColor={'#FFF'}
                                activeStrokeColor={'#EF8F2F'}
                                // activeStrokeWidth={10}
                                // inActiveStrokeWidth={14}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'#FFF'}
                                // style={{elevation: 10}}
                            />
                        </View>

                        <View style={styles.progressCircle}>
                            <Text style={styles.progressTitle}>Desafios</Text>
                            <CircularProgress
                                radius={40}
                                value={25}
                                textColor='blue'
                                fontSize={20}
                                valueSuffix={'%'}
                                inActiveStrokeColor={'#FFF'}
                                activeStrokeColor={'#EF8F2F'}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'#FFF'}
                                // style={{elevation: 10}}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <TopTabsUc />
  
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#205395',
    },
    sectionProgress: {
        // backgroundColor: '#205395',
        // borderWidth: 1,
        // borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,
    },
    progressCircle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#FFF'
    },
    progressStyle: {
        fontWeight: '100',
        color: 'blue'
    },
    sectionProgressBar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    progressBar: {
        alignitems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    progressBarTitle: {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF'
    }
})