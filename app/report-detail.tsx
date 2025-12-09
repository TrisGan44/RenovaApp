import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors, shadows } from '@/constants/theme';

export default function ReportDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Text style={styles.title}>Detail Laporan</Text>
        <Text style={styles.subtitle}>ID laporan: {id ?? 'N/A'}</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="construct-outline" size={18} color={colors.primary} />
            <Text style={styles.cardTitle}>Pemasangan Kabinet</Text>
          </View>
          <View style={styles.metaRow}>
            <Ionicons name="calendar-outline" size={16} color={colors.muted} />
            <Text style={styles.metaText}>Senin, 8 Desember 2025</Text>
          </View>
          <Text style={styles.description}>
            Pemasangan kabinet bawah telah selesai 80%. Pintu kabinet akan dipasang besok setelah
            pengecekan finishing. Semua engsel dan rel laci sudah terpasang.
          </Text>

          <View style={styles.gallery}>
            {Array.from({ length: 3 }).map((_, index) => (
              <View key={index} style={styles.galleryItem}>
                <Ionicons name="image-outline" size={22} color={colors.primary} />
                <Text style={styles.galleryLabel}>Foto {index + 1}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.secondaryButton} onPress={router.back}>
          <Text style={styles.secondaryText}>Kembali</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: colors.text,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: colors.muted,
  },
  card: {
    marginTop: 10,
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    gap: 12,
    ...shadows.card,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: 'Poppins_700Bold',
    color: colors.text,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaText: {
    fontSize: 13,
    color: colors.muted,
    fontFamily: 'Poppins_500Medium',
  },
  description: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 20,
  },
  gallery: {
    flexDirection: 'row',
    gap: 10,
  },
  galleryItem: {
    flex: 1,
    backgroundColor: '#EEF0FF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    gap: 6,
  },
  galleryLabel: {
    fontSize: 12,
    color: colors.muted,
    fontFamily: 'Poppins_500Medium',
  },
  secondaryButton: {
    marginTop: 6,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryText: {
    color: colors.text,
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
  },
});
