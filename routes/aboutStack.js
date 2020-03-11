import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#eee', height: 80}, headerTintColor: '#333'}}>
            {/*<Stack.Screen name='About' component={About} options={{ title: 'About' }} />*/}
            <Stack.Screen name='About' component={About} options={{ headerTitle: () => <Header />, headerTitleAlign: 'center'}} />
        </Stack.Navigator>
    )
}