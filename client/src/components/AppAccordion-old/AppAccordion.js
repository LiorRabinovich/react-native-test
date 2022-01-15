import { StyleSheet, Text, View } from 'react-native';
import { AppAccordionTab } from './AppAccordionTab';

const styles = StyleSheet.create({
    container: {
        direction: 'row',
        height: '100%'
    }
});

export function AppAccordion() {
    return (
        <View style={styles.container}>
            <AppAccordionTab />
            <AppAccordionTab />
            <AppAccordionTab />
            <AppAccordionTab />
            <AppAccordionTab />
        </View>
    )
}