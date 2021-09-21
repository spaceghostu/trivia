import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from './MainScreen';
import ScoreboardScreen from './ScoreboardScreen';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Main"
                component={MainScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name="home-sharp" size={size} color={color}></Icon>)
                }}
            />
            <Tab.Screen
                name="Scoreboard"
                component={ScoreboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name="list-sharp" size={size} color={color}></Icon>)
                }}
            />
        </Tab.Navigator>
    )
}
