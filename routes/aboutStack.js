import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#f4511e', height: 80}, headerTintColor: '#fff'}}>
            <Stack.Screen name='About' component={About} options={{ title: 'About' }} />
        </Stack.Navigator>
    )
}