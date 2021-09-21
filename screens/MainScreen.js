import React from 'react'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../components/Logo'

export default function MainScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.root}>
            <Logo />
            <Button onPress={() => navigation.navigate('Quiz')} title="Quiz" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
    }
})
