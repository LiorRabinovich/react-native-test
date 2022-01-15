import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%'
    }
});

export function AppScreenContainer({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}