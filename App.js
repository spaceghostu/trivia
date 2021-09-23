import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigation from './screens/TabsNavigation';
import QuizScreen from './screens/QuizScreen';
import { Provider } from 'react-redux';
import store from './store';
import LobbyScreen from './screens/LobbyScreen';
import GameOverScreen from './screens/GameOverScreen';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const Stack = createNativeStackNavigator();

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={TabsNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Lobby"
              component={LobbyScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Quiz"
              component={QuizScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GameOver"
              component={GameOverScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="dark" />
      </PersistGate>
    </Provider>
  );
}
