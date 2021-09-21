import React from 'react'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function QuizScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Quiz</Text>
            <Button onPress={() => navigation.navigate('Main')} title="Main" />
        </SafeAreaView>
    )
}
