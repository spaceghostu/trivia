import moment from 'moment';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { DEFAULT_COLORS } from '../constants';

export const SafeAreaContainer = styled.SafeAreaView`
    height: 100%;
    background-color: ${DEFAULT_COLORS.accentLight};
`

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const Button = props => (
    <ButtonContainer
        onPress={() => props.disabled ? null : props.onPress()}
        style={props.style}
        active={props.active}
        disabled={props.disabled}
    >
        <ButtonText active={props.active}>{props.title.toUpperCase()}</ButtonText>
    </ButtonContainer>
)

const ButtonContainer = styled.TouchableOpacity`
	width: 200px;
	height: 40px;
	padding: 12px;
	border-radius: 4px;	
    margin: 5px;
	background-color: ${props => props.active ? DEFAULT_COLORS.primaryLight : DEFAULT_COLORS.primary};
    opacity: ${props => props.disabled ? 0.5 : 1}
`

const ButtonText = styled.Text`
    color: ${props => props.active ? 'black' : 'white'};
	font-size: 15px;
	text-align: center;
`

export const Loader = styled.ActivityIndicator`
    marginTop: 200px;
`

export const Question = styled.Text`
    background-color: ${DEFAULT_COLORS.primaryLight};
    color: ${DEFAULT_COLORS.primaryDark};
    padding: 40px;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    fontSize: 24px;
    text-align: center;
    width: 100%;
`

export const QuestionHeader = styled.View`
    background-color: ${DEFAULT_COLORS.primary};
    padding: 10px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    width: 100%;
`

export const QuestionHeaderText = styled.Text`
    color: white;
`

export const Answers = styled.View`
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 10px;
    padding-bottom: 10px;
`
export const AnswerButton = props => (
    <AnswerButtonWrapper>
        <AnswerButtonContainer
            onPress={props.onPress}
            style={props.style}
            reveal={props.reveal}
        >
            <AnswerButtonText>{props.title.toUpperCase()}</AnswerButtonText>
        </AnswerButtonContainer>
    </AnswerButtonWrapper>
)

const AnswerButtonWrapper = styled.View`
    padding: 5px;
    width: 50%;
`

const AnswerButtonContainer = styled.TouchableOpacity`
	border-radius: 4px;
    padding: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    min-height: 50px;
	background-color: ${props => {
        switch (props.reveal) {
            case 'success': return DEFAULT_COLORS.success
            case 'error': return DEFAULT_COLORS.error
            default: return DEFAULT_COLORS.primary
        }
    }};
`

const AnswerButtonText = styled.Text`
	font-size: 15px;
	color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
`

export const Picker = styled.Picker`
    height: 40px;
    width: 200px;
    margin: 5px;
`

export const Categories = styled.View`
    margin-bottom: 30px;
`

export const Score = ({ score }) => (
    <ScoreContainer>
        <ScoreColumn>
            <ScoreDate>{moment(score.date).format('MMMM Do YYYY hh:mm A')}</ScoreDate>
            <ScoreCategory>{
                score.category === 'literature' ? 'Art and literature' :
                    (score.category.charAt(0).toUpperCase() + score.category.slice(1)).replaceAll('_', ' ')
            }</ScoreCategory>
        </ScoreColumn>
        <ScoreColumn style={{ alignItems: 'flex-end', paddingRight: 10 }}>
            <ScoreScore>{score.score}/10</ScoreScore>
        </ScoreColumn>
    </ScoreContainer>
)

const ScoreContainer = styled.View`
    padding: 10px;
    background-color: ${DEFAULT_COLORS.primary};
    margin: 5px;
    width: 100%;
    flex-direction: row;
    border-radius: 4px;
`
const ScoreColumn = styled.View`
    flex: 1 1 50%;
`
const ScoreDate = styled.Text`
    color: white;
    opacity: 0.75;
`

const ScoreScore = styled.Text`
    color: white;
    font-size: 32px;
`

const ScoreCategory = styled.Text`
    color: white;
    font-size: 18px;
`


export const ScoreCard = ({ score }) => (
    <ScoreCardContainer>
        <Text style={{ color: 'white' }}>You scored...</Text>
        <ScoreCardValue>{score}/10</ScoreCardValue>
    </ScoreCardContainer>
)

const ScoreCardContainer = styled.View`
    padding: 40px;
    align-items: center;
    justify-content: center;
    background-color: ${DEFAULT_COLORS.primary};
    border-radius: 4px;
    margin-top: 80px;
    margin-bottom: 80px;
`
const ScoreCardValue = styled.Text`
    font-size: 64px;
    color: white;
`