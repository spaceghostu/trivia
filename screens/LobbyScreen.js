import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Categories, Container, Picker } from '../components/StyledComponents';
import { setCategory } from '../store/game';

export default function LobbyScreen({ navigation }) {

    const dispatch = useDispatch();
    const { category } = useSelector(state => state.game);

    return (
        <SafeAreaView>
            <Container style={styles.root}>
                <Categories>
                    <Text>Select a category...</Text>
                    <Button title="Food and Drink" onPress={() => dispatch(setCategory("food_and_drink"))} active={category === 'food_and_drink'} />
                    <Button title="Geography" onPress={() => dispatch(setCategory("geography"))} active={category === 'geography'} />
                    <Button title="General Knowledge" onPress={() => dispatch(setCategory("general_knowledge"))} active={category === 'general_knowledge'} />
                    <Button title="History" onPress={() => dispatch(setCategory("history"))} active={category === 'history'} />
                    <Button title="Art and Literature" onPress={() => dispatch(setCategory("literature"))} active={category === 'literature'} />
                    <Button title="Movies" onPress={() => dispatch(setCategory("movies"))} active={category === 'movies'} />
                    <Button title="Music" onPress={() => dispatch(setCategory("music"))} active={category === 'music'} />
                    <Button title="Science" onPress={() => dispatch(setCategory("science"))} active={category === 'science'} />
                    <Button title="Society and Culture" onPress={() => dispatch(setCategory("society_and_culture"))} active={category === 'society_and_culture'} />
                    <Button title="Sport and Leisure" onPress={() => dispatch(setCategory("sport_and_leisure"))} active={category === 'sport_and_leisure'} />
                </Categories>
                <Button title="Start" onPress={() => navigation.navigate("Quiz")} disabled={!category} />
                <Button title="Quit" onPress={() => navigation.navigate("Main")} />
            </Container>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingTop: 50
    }
})
