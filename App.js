import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import {AppLoading} from 'expo';
import HomeNavigator from './routes/homeStack';
import RootDrawerNavigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
        <RootDrawerNavigator />
    );
  } else {
    return (
        <AppLoading
            startAsync={getFonts}
            onFinish={() => setFontsLoaded(true)}
        />
    )
  }
}
