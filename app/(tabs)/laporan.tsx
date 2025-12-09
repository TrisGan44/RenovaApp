import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors, shadows } from '@/constants/theme';

const REPORTS = [
  {
    id: '1',
    title: 'Pemasangan Kabinet',
    date: 'Senin, 8 Desember 2025',
    description:
      'Pemasangan kabinet bawah telah selesai 80%. Proses finishing akan dilanjutkan besok.',
    photos: 3,
  },
  {
    id: '2',
    title: 'Instalasi Listrik',
    date: 'Minggu, 7 Desember 2025',
    description:
      'Pemasangan titik-titik lampu dan stop kontak selesai. Sudah dites dan berfungsi dengan baik.',
    photos: 2,
  },
];

export default function LaporanScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Text style={styles.title}>Laporan Harian</Text>
        <Text style={styles.subtitle}>Update perkembangan dari mandor</Text>

        <View style={styles.list}>
          {REPORTS.map((report) => (
            <View key={report.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.cardTitle}>{report.title}</Text>
                  <View style={styles.dateRow}>
                    <Ionicons name="calendar-outline" size={16} color={colors.muted} />
                    <Text style={styles.dateText}>{report.date}</Text>
                  </View>
                </View>
                <View style={styles.badge}>
                  <Ionicons name="image-outline" size={14} color={colors.primary} />
                  <Text style={styles.badgeText}>{report.photos}</Text>
                </View>
              </View>

              <Text style={styles.description}>{report.description}</Text>

              <View style={styles.galleryRow}>
                {Array.from({ length: report.photos }).map((_, index) => (
                  <View key={index} style={styles.galleryItem}>
                    <Ionicons name="image-outline" size={20} color={colors.primary} />
                  </View>
                ))}
              </View>

              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.detailButton}
                onPress={() => router.push({ pathname: '/report-detail', params: { id: report.id } })}>
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
  list: {
    marginTop: 12,
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
  badge: {
    backgroundColor: '#EEF0FF',
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  badgeText: {
    fontSize: 13,
    color: colors.primary,
    fontFamily: 'Poppins_600SemiBold',
  },
  description: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 20,
  },
  galleryRow: {
    flexDirection: 'row',
    gap: 8,
  },
  galleryItem: {
    flex: 1,
    aspectRatio: 1.2,
    borderRadius: 12,
    backgroundColor: '#EEF0FF',
    borderWidth: 1,
    borderColor: '#E6E8F0',
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
