import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../store/questions';
import { Container, Loader, Question, QuestionHeader, Answers, AnswerButton, Button, QuestionHeaderText } from '../components/StyledComponents';
import { incrementScore } from '../store/game';
import { shuffle } from '../utils';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


export default function QuizScreen({ navigation }) {
    const { questions, loading, error } = useSelector(state => state.questions);
    const { category } = useSelector(state => state.game);
    const dispatch = useDispatch();
    const [activeQuestion, setActiveQuestion] = useState();
    const [isPLaying, setIsPlaying] = useState(true);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [reveal, setReveal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState();
    const { score } = useSelector(state => state.game);

    const _parseQuestion = (question) => ({
        category: question.category,
        question: question.question,
        answers: shuffle([
            { answer: question.correctAnswer, correct: true },
            ...shuffle(question.incorrectAnswers).slice(0, 3).map(answer => ({ answer, correct: false }))
        ])
    });

    const _submitAnswer = (correct, index) => {
        setSelectedIndex(index);
        setIsPlaying(false);
        setReveal(true);
        setTimeout(() => {
            setReveal(false);
            setActiveQuestionIndex(val => {
                if (val === questions.length - 1) navigation.navigate('GameOver')
                else {
                    setActiveQuestion(_parseQuestion(questions[val + 1]))
                    setIsPlaying(true);
                    return val + 1
                }
            });

            if (correct) dispatch(incrementScore());
        }, 2000);
    }

    useEffect(() => {
        if (!questions.length) {
            dispatch(fetchQuestions(category))
        }
        if (questions.length && !activeQuestion) {
            setActiveQuestion(_parseQuestion(questions[activeQuestionIndex]))
        }
    }, [dispatch, questions, activeQuestion, activeQuestionIndex, category]);

    if (loading === 'pending' || !activeQuestion) return <Loader />

    if (error) return (
        <Container>
            <Text>{error}</Text>
            <Button title="Retry" onPress={() => dispatch(fetchQuestions())} />
        </Container>
    )

    return (
        <SafeAreaView>
            <Container>
                <QuestionHeader>
                    <QuestionHeaderText style={{ fontSize: 18 }}>{activeQuestion.category}</QuestionHeaderText>
                    <QuestionHeaderText>Question {activeQuestionIndex + 1}/10</QuestionHeaderText>
                    <QuestionHeaderText>Score: {score}</QuestionHeaderText>
                    <View style={styles.timer}>
                        <CountdownCircleTimer
                            isPlaying={isPLaying}
                            key={activeQuestionIndex}
                            duration={20}
                            size={45}
                            style={{ zIndex: 100 }}
                            strokeWidth={4}
                            trailColor="rgba(255,255,255,0)"
                            onComplete={() => _submitAnswer(false, null)}
                            colors={[
                                ['#004777', 0.4],
                                ['#F7B801', 0.4],
                                ['#A30000', 0.2],
                            ]}
                        >
                            {({ remainingTime }) => (
                                <Animated.Text style={{ color: 'white' }}>
                                    {remainingTime}
                                </Animated.Text>
                            )}
                        </CountdownCircleTimer>
                    </View>
                </QuestionHeader>
                <Question>{activeQuestion.question}</Question>
                <Answers>
                    {activeQuestion.answers.map((answer, index) => (
                        <AnswerButton
                            key={index}
                            title={answer.answer}
                            reveal={
                                reveal && (index === selectedIndex || answer.correct) ?
                                    answer.correct ? 'success' : 'error' :
                                    null
                            }
                            onPress={() => _submitAnswer(answer.correct, index)}
                        />
                    ))}
                </Answers>
                {/* <Button onPress={() => navigation.navigate('Main')} title="Main" /> */}
            </Container>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    timer: {
        position: 'absolute',
        top: 7,
        right: 7,
    }
})
