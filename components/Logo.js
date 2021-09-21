import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Logo() {
    return (
        <View>
            <Text style={styles.icon}>?</Text>
            <Text style={styles.trivia}>Trivia</Text>
            <Text style={styles.quiz}>QUIZ</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    trivia: {
        fontSize: 56,
        transform: [{ scaleY: 0.6 }],
        color: '#109E94',
    },
    quiz: {
        fontSize: 58,
        top: -30,
        fontWeight: '200',
    },
    icon: {
        fontSize: 160,
        color: '#107D9E',
        position: 'absolute',
        top: -35,
        left: 64,
        transform: [{ rotateZ: '20deg' }]
    }
})