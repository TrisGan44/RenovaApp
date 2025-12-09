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

export default function DesignDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Text style={styles.title}>Detail Desain</Text>
        <Text style={styles.subtitle}>ID desain: {id ?? 'N/A'}</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Desain Final</Text>
          <View style={styles.metaRow}>
            <Ionicons name="calendar-outline" size={16} color={colors.muted} />
            <Text style={styles.metaText}>18/11/2025</Text>
          </View>
          <Text style={styles.description}>
            Denah dapur dengan tata letak baru, penambahan kabinet atas, dan material HPL
            premium. Semua ukuran sudah disesuaikan dengan site measurement terbaru.
          </Text>

          <View style={styles.infoRow}>
            <Ionicons name="person-outline" size={18} color={colors.primary} />
            <Text style={styles.infoText}>Arsitek: Ir. Ahmad</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="checkmark-circle-outline" size={18} color={colors.success} />
            <Text style={styles.infoText}>Status: Disetujui klien</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.primaryButton}
          onPress={() => router.push('/revision-request')}>
          <Text style={styles.primaryText}>Ajukan Revisi</Text>
        </TouchableOpacity>
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
  cardTitle: {
    fontSize: 17,
    fontFamily: 'Poppins_700Bold',
    color: colors.text,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
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
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins_500Medium',
  },
  primaryButton: {
    marginTop: 6,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    ...shadows.card,
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
  },
  secondaryButton: {
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
