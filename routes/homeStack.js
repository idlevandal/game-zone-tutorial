import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#eee', height: 80}, headerTintColor: '#333'}}>
            {/*<Stack.Screen name='Home' component={Home} options={{ title: 'GameZone' }} />*/}
            <Stack.Screen name='Home' component={Home} options={{ headerTitle: () => <Header /> , headerTitleAlign: 'center'}} />
            <Stack.Screen
                name='ReviewDetails' component={ReviewDetails} options={{ title: 'Review Details' }} />
        </Stack.Navigator>
    )
}