import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

export default class BuzzerScreen extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.button1}
                >
                    <Text style={styles.buttontxt}>S.O.S</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button2}
                >
                    <Text style={styles.buttontxt}>Call Someone to Collect My Garbage</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button1: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'red',
    },
    buttontxt: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    button2: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'yellow',
        marginTop: 50
        },
})