import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { products } from '../../data/products';
import { colors } from '../../theme/colors';
 
export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const producto = products.find((item) => item.id === Number(id));
 
  if (!producto) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>No encontramos este producto</Text>
        <Pressable onPress={() => router.back()} style={styles.backChip}>
          <Text style={styles.backChipText}>Volver</Text>
        </Pressable>
      </View>
    );
  }
 
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <View style={styles.imageWrap}>
        <Image source={producto.imagen} style={styles.image} />
        <Pressable onPress={() => router.back()} style={styles.backChip}>
          <Text style={styles.backChipText}>‹ Volver</Text>
        </Pressable>
      </View>
 
      <View style={styles.sheet}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{producto.categoria}</Text>
        </View>
        <Text style={styles.name}>{producto.nombre}</Text>
        <Text style={styles.price}>
          $ {producto.precio.toLocaleString('es-AR')}
        </Text>
        <Text style={styles.description}>{producto.descripcion}</Text>
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  scrollContent: { flexGrow: 1 },
  center: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  notFound: { fontSize: 17, fontWeight: '700', color: colors.ink },
  imageWrap: { width: '100%', height: 320 },
  image: { width: '100%', height: '100%' },
  backChip: {
    position: 'absolute',
    top: 56,
    left: 20,
    backgroundColor: colors.bg,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  backChipText: { color: colors.ink, fontWeight: '700', fontSize: 13 },
  sheet: {
    backgroundColor: colors.bgAlt,
    marginTop: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    gap: 10,
    flex: 1,
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: colors.teal,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagText: { fontSize: 11, fontWeight: '700', color: colors.bg },
  name: { fontSize: 26, fontWeight: '900', color: colors.ink, letterSpacing: -0.5 },
  price: { fontSize: 20, fontWeight: '800', color: colors.amber },
  description: { fontSize: 15, lineHeight: 23, color: colors.muted, marginTop: 6 },
});