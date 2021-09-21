import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
`

export const Button = props => (
    <ButtonContainer
        onPress={props.onPress}
        style={props.style}
    >
        <ButtonText>{props.title.toUpperCase()}</ButtonText>
    </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity`
	width: 200px;
	height: 40px
	padding: 12px;
	border-radius: 4px;	
	background-color: #21BBEB;
`;

const ButtonText = styled.Text`
	font-size: 15px;
	color: white;
	text-align: center;
`;