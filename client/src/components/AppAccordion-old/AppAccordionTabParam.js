import { StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '../AppIcon/AppIcon'
import { Icons } from '../../consts/Icons';

const styles = StyleSheet.create({
    container: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 5,
    },
    smallText: {
        fontSize: 10,
    }
});

export function AppAccordionTabParam() {
    return (
        <View style={styles.container}>
            <AppIcon style={styles.icon} type={Icons.FontAwesome} name="home" />
            <View>
                <Text>דיזאורוס</Text>
                <Text style={styles.smallText}>עיר</Text>
            </View>
        </View>
    )
}