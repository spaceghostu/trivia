import React from 'react'
import { ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, SafeAreaContainer, Score } from '../components/StyledComponents';
import { selectSortedScoreboard } from '../store/scoreboard';


export default function ScoreboardScreen() {

    const scoreboard = useSelector(selectSortedScoreboard);

    return (
        <SafeAreaContainer>
            <Container>
                {!scoreboard.length ? <Text>No saved scores. Play a game to save scores</Text> :
                    <ScrollView style={{ width: '100%' }}>
                        {scoreboard.map((score, index) => (
                            <Score key={index} score={score} />
                        ))}
                    </ScrollView>
                }
            </Container>
        </SafeAreaContainer>
    )
}
