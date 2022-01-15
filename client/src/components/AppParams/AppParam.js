import { StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '../AppIcon/AppIcon'
import { Icons } from '../../consts/Icons';

const styles = StyleSheet.create({
    container: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
    },
    textBox: {
        alignItems: 'flex-start',
    },
    smallText: {
        fontSize: 10,
    }
});

const defaultIcon = { type: Icons.FontAwesome, name: 'home' }

export function AppParam({ title, value, icon = defaultIcon }) {
    return (
        <View style={styles.container}>
            <AppIcon style={styles.icon} {...icon} />
            <View style={styles.textBox}>
                <Text>{value}</Text>
                <Text style={styles.smallText}>{title}</Text>
            </View>
        </View>
    )
}