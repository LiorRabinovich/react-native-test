export function AppIcon({ type, name, color, size = 24, style }) {
    const Tag = type;
    return type && name &&
        (<Tag name={name} size={size} color={color} style={style} />)
}