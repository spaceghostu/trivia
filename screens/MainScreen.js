import React from 'react'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MainScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Main</Text>
            <Button onPress={() => navigation.navigate('Quiz')} title="Quiz" />
        </SafeAreaView>
    )
}
