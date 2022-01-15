import { StyleSheet, View } from 'react-native';
import { AppParam } from './AppParam'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});

export function AppParams({ data = [] }) {
    return (
        <View style={styles.container}>
            {data.map((param) => (
                <AppParam key={param.key} {...param} />
            ))}
        </View>
    )
}