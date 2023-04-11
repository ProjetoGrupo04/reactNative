import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Feather } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Encontros from '../Encontros';
import Participantes from '../Participantes';
import Competencia from '../Copetencia';
import Notas from '../Notas';

const Tab = createMaterialTopTabNavigator();

function TopTabsUc() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 9, fontWeight: 'bold' },
                tabBarInactiveTintColor: '#FFF',
                tabBarActiveTintColor: '#FFF',
                tabBarStyle: {
                    backgroundColor: '#205395'
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#EF8F2F',
                },

            }}
        >
            <Tab.Screen
                name="Encontros"
                component={Encontros}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="calendar"
                            size={22}
                            color={focused ? '#f8922c' : '#FFF'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Participantes"
                component={Participantes}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabelStyle: {
                        elevation: 10,
                        width: 20,
                    },
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="users"
                            size={22}
                            color={focused ? '#f8922c' : '#FFF'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Competências"
                component={Competencia}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused}) => (
                        <Feather
                            name="award"//award
                            size={22}
                            color={focused ? '#f8922c' : '#FFF'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Notas"
                component={Notas}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="bar-chart-2"
                            size={25}
                            color={focused ? '#f8922c' : '#FFF'}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TopTabsUc;