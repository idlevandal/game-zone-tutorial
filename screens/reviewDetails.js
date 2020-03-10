import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

export default function ReviewDetails({route, navigation}) {
    const {title, rating, body} = route.params;
    return (
        <View style={globalStyles.container}>
            <Text>{title}</Text>
            <Text>{rating}</Text>
            <Text>{body}</Text>
        </View>
    )
}
