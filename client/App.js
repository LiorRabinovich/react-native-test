import { useEffect } from 'react';
import { StyleSheet, I18nManager } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreensList } from './src/consts/ScreensList.js'
import { AppTabs } from './src/components/AppTabs/AppTabs'
const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans-hebrew-light': require('./src/assets/fonts/open-sans-hebrew/open-sans-hebrew-light.ttf'),
    'open-sans-hebrew-regular': require('./src/assets/fonts/open-sans-hebrew/open-sans-hebrew-regular.ttf'),
    'open-sans-hebrew-bold': require('./src/assets/fonts/open-sans-hebrew/open-sans-hebrew-bold.ttf'),
    'open-sans-hebrew-extra-bold': require('./src/assets/fonts/open-sans-hebrew/open-sans-hebrew-extra-bold.ttf'),
  })

  useEffect(() => {
    I18nManager.forceRTL(true)
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator style={styles.container} initialRouteName="שם הצבא">
        {ScreensList.map((screen) => <Tab.Screen key={screen.name} {...screen} />)}
      </Tab.Navigator>
    </NavigationContainer>
  );
}