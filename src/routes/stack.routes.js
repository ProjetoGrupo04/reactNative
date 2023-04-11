import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';

import UcDetails from '../pages/Aprendizagem/UCDetails';
import Notificacao from '../pages/Notificacao';
import SituacoesAprendizagens from '../pages/Aprendizagem/SituacoesAprendizagem';
import ObjetoAprendizagem from '../pages/Aprendizagem/ObjetoAprendizagem';

const Stack = createNativeStackNavigator();

function StackRoutes() {
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen name="UcDetailScreem" component={UcDetails} options={{ headerShown: false, title: 'UC' }} />
            <Stack.Screen name="SituacoesAprendizagensScreem" component={SituacoesAprendizagens} options={{ headerShown: false, title: 'Aprendizagens' }} />
            <Stack.Screen name="ObjetoAprendizagenScreem" component={ObjetoAprendizagem} options={{ headerShown: false, title: 'Aprendizagens' }} />
            <Stack.Screen name="NotificacaoScreem" component={Notificacao} options={{ headerShown: true, title: 'Notificações' }} />
        </Stack.Navigator>
    );
}

export default StackRoutes;