import { Text } from 'react-native'

export function AppText({ children, weight = 'regular', ...props }) {
    return <Text style={{ fontFamily: `open-sans-hebrew-${weight}` }} {...props}>{children}</Text>
}