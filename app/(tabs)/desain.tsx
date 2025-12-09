import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors, gradients, shadows } from '@/constants/theme';

type Status = 'Disetujui' | 'Direvisi';

const DESIGNS: {
  id: string;
  title: string;
  date: string;
  description: string;
  status: Status;
}[] = [
  {
    id: '1',
    title: 'Desain Final',
    date: '18/11/2025',
    description: 'Desain disetujui klien. Siap untuk eksekusi.',
    status: 'Disetujui',
  },
  {
    id: '2',
    title: 'Revisi 2',
    date: '15/11/2025',
    description: 'Perubahan warna kabinet dari putih ke abu-abu gelap.',
    status: 'Direvisi',
  },
];

const statusColor: Record<Status, { text: string; bg: string }> = {
  Disetujui: { text: colors.success, bg: '#E8F9F1' },
  Direvisi: { text: colors.warning, bg: '#FFF4E6' },
};

export default function DesainScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Text style={styles.title}>Desain & Revisi</Text>
        <Text style={styles.subtitle}>Riwayat desain dari arsitek</Text>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.primaryButton}
          onPress={() => router.push('/revision-request')}>
          <Ionicons name="chatbox-ellipses-outline" size={18} color="#FFFFFF" />
          <Text style={styles.primaryButtonText}>Ajukan Revisi Baru</Text>
        </TouchableOpacity>

        <View style={styles.list}>
          {DESIGNS.map((design) => (
            <View key={design.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.cardTitle}>{design.title}</Text>
                  <View style={styles.dateRow}>
                    <Ionicons name="calendar-outline" size={16} color={colors.muted} />
                    <Text style={styles.dateText}>{design.date}</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.statusPill,
                    { backgroundColor: statusColor[design.status].bg },
                  ]}>
                  <Ionicons name="checkmark-circle" size={16} color={statusColor[design.status].text} />
                  <Text
                    style={[
                      styles.statusText,
                      { color: statusColor[design.status].text },
                    ]}>
                    {design.status}
                  </Text>
                </View>
              </View>

              <Text style={styles.description}>{design.description}</Text>

              <LinearGradient colors={gradients.soft} style={styles.preview}>
                <Ionicons name="document-outline" size={28} color={colors.primary} />
              </LinearGradient>

              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.detailButton}
                onPress={() =>
                  router.push({ pathname: '/design-detail', params: { id: design.id } })
                }>
                <Text style={styles.detailText}>Lihat Detail</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
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
    paddingBottom: 60,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: colors.text,
    marginTop: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: colors.muted,
  },
  primaryButton: {
    marginTop: 12,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    ...shadows.card,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins_700Bold',
    fontSize: 15,
  },
  list: {
    marginTop: 10,
    gap: 16,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    gap: 12,
    ...shadows.card,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: colors.text,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  dateText: {
    fontSize: 13,
    color: colors.muted,
    fontFamily: 'Poppins_400Regular',
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 18,
  },
  statusText: {
    fontSize: 13,
    fontFamily: 'Poppins_600SemiBold',
  },
  description: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 20,
  },
  preview: {
    height: 120,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailButton: {
    marginTop: 4,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#F7F8FF',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
});
