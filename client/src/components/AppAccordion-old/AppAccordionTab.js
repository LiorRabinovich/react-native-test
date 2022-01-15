import { StyleSheet, Text, View } from 'react-native';
import { AppAccordionTabParam } from './AppAccordionTabParam';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});

export function AppAccordionTab() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AppAccordionTabParam />
                <AppAccordionTabParam />
                <AppAccordionTabParam />
                <AppAccordionTabParam />
            </View>
        </View>
    )
}