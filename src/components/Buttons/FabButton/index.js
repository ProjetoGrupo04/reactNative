import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

export default function FabButton({ id }) {
    // const [open, setOpen] = useState(0);
    const animation = new Animated.Value(0);
    let open = 0;

    const toggleMenu = () => {
        const toValue = open ? 0 : 1;
        Animated.spring(animation, {
            toValue,
            friction: 6,
            useNativeDriver: true,
        }).start();

        open = !open;
    }

    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"],
                })
            }
        ]
    }

    const cameraStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -60]
                })
            }
        ]
    }

    const likeStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -115]
                })
            }
        ]
    }

    const bookStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -170]
                })
            }
        ]
    }

    return (
        <View style={[styles.container]}>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.submenu, bookStyle]}>
                    <Entypo name="book" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

            {/* Botão Secundário */}
            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.submenu, likeStyle]}>
                    <Entypo name="graduation-cap" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

            {/* Botão Secundário */}
            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.submenu, cameraStyle]}>
                    <Feather name="book-open" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

            {/* Botão principal */}
            <TouchableWithoutFeedback onPress={() => toggleMenu()}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <AntDesign name="plus" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 90,
        right: 50,
        elevation: 10
    },
    button: {
        elevation: 10,
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: '#00213B',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10,
        }
    },
    menu: {
        backgroundColor: '#205395'
    },
    submenu: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#205395'
    }
})