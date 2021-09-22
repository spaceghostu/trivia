import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../components/Logo'
import { Container, Button } from '../components/StyledComponents'

export default function MainScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Container style={styles.root}>
                <Logo />
                <Button
                    onPress={() => navigation.navigate('Lobby')}
                    title="Start"
                    style={styles.button}
                />
            </Container>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingTop: 200,
        alignItems: 'center',
    },
    button: {
        marginTop: 30,
    }
})
