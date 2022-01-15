import { View, StyleSheet } from 'react-native'

import { AppText } from '../../components/AppText/AppText'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 2
    },
    columnSmall: { flex: 1, alignItems: 'flex-start', },
    columnMedium: { flex: 2, alignItems: 'flex-start', },
    columnBig: { flex: 4, alignItems: 'flex-start', },
})

export function ArmiesListItem({ rating, name, gold, soldiers }) {
    return (
        <View style={styles.container}>
            <View style={styles.columnSmall}><AppText>{rating}</AppText></View>
            <View style={styles.columnBig}><AppText>{name}</AppText></View>
            <View style={styles.columnMedium}><AppText>{gold}</AppText></View>
            <View style={styles.columnSmall}><AppText>{soldiers}</AppText></View>
        </View> 
    )
}