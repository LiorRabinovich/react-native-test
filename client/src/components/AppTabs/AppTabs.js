import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function AppTabs({ tabs }) {
    const isWeb = Platform.OS === 'web';

    return (
        <Tab.Navigator swipeEnabled={!isWeb} animationEnabled={!isWeb}>
            {tabs.map((tab) => <Tab.Screen key={tab.key} {...tab} />)}
        </Tab.Navigator>
    );
}