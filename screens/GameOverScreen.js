import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Container, SafeAreaContainer, ScoreCard } from '../components/StyledComponents'

export default function GameOverScreen({ navigation }) {

    const { score } = useSelector(state => state.game);

    return (
        <SafeAreaContainer>
            <Container>
                <ScoreCard score={score} />
                <Button title="Main" onPress={() => navigation.navigate("Main")} />
                <Button title="Scoreboard" onPress={() => navigation.navigate("Scoreboard")} />
            </Container>
        </SafeAreaContainer>
    )
}
