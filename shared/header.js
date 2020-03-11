import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image, ImageBackground, Modal} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    // #25
    // https://reactnavigation.org/docs/connecting-navigation-prop/
    const navigation = useNavigation();

    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name="menu" size={28} color='#444' onPress={openMenu} style={styles.icon}  />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>Game Zooone</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        // width: '100%',
        width: Dimensions.get('window').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight:'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    headerTitle: {
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    }
});