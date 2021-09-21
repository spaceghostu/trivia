import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Logo() {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>QU<View><Text style={styles.qmark}>&#xBF;</Text></View>Z</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    text: {
        fontSize: 58,
        color: '#109E94'
    },
    qmark: {
        bottom: 8,
        fontSize: 58,
        color: '#EB6300',
    }
})