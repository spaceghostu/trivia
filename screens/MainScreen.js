import React from 'react'
import { StyleSheet } from 'react-native'
import Logo from '../components/Logo'
import { Container, Button, SafeAreaContainer } from '../components/StyledComponents'

export default function MainScreen({ navigation }) {
    return (
        <SafeAreaContainer>
            <Container style={styles.root}>
                <Logo />
                <Button
                    onPress={() => navigation.navigate('Lobby')}
                    title="Start"
                    style={styles.button}
                />
            </Container>
        </SafeAreaContainer>
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
