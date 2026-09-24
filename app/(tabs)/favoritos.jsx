import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
 
export default function Favoritos() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Favoritos</Text>
      <Text style={styles.subtitle}>Todavía no guardaste ningún producto.</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 24,
  },
  title: { fontSize: 24, fontWeight: '900', color: colors.ink },
  subtitle: { fontSize: 14, color: colors.muted, textAlign: 'center' },
});