import React, { useEffect, useState } from 'react';
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../store/questions';
import { Container, Loader } from '../components/StyledComponents';


export default function QuizScreen({ navigation }) {
    const { questions, loading } = useSelector(state => state.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!questions.length) {
            dispatch(fetchQuestions())
        }
    }, [dispatch, questions]);

    if (loading === 'pending') return <Loader />

    return (
        <SafeAreaView>
            <Container>
                <Text>{JSON.stringify(questions)}</Text>
                <Button onPress={() => navigation.navigate('Main')} title="Main" />
            </Container>
        </SafeAreaView>
    )
}
