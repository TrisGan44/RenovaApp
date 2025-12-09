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

const STATS = [
  { label: 'Tahap saat ini', value: 'Proses' },
  { label: 'Progress', value: '65%' },
  { label: 'Sisa hari', value: '15' },
];

const SHORTCUTS = [
  {
    label: 'Konsultasi',
    icon: 'chatbubble-ellipses-outline' as const,
    gradient: gradients.blue,
    route: '/consultation',
  },
  {
    label: 'Desain',
    icon: 'color-palette-outline' as const,
    gradient: gradients.primary,
    route: '/(tabs)/desain',
  },
  {
    label: 'Bayar',
    icon: 'card-outline' as const,
    gradient: ['#FFA63D', '#FF7B54'],
    route: '/(tabs)/bayar',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.headerRow}>
          <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
            <Ionicons name="menu-outline" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Home</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
            <Ionicons name="settings-outline" size={22} color={colors.text} />
          </TouchableOpacity>
        </View>

        <LinearGradient colors={gradients.primary} style={styles.heroCard}>
          <View style={styles.heroTextWrapper}>
            <Text style={styles.heroGreeting}>Halo,</Text>
            <Text style={styles.heroName}>Budi Santoso</Text>
            <Text style={styles.heroSub}>Selamat datang di RenovaPro</Text>
          </View>
          <View style={styles.avatarStub} />
        </LinearGradient>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.consultCard}
          onPress={() => router.push('/consultation')}>
          <Ionicons name="home-outline" size={24} color={colors.primary} />
          <View style={styles.consultText}>
            <Text style={styles.consultTitle}>Belum Ada Proyek</Text>
            <Text style={styles.consultBody}>
              Mulai renovasi dengan membuat janji konsultasi gratis bersama arsitek kami.
            </Text>
          </View>
          <Ionicons name="arrow-forward-circle" size={24} color={colors.primary} />
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proyek Aktif</Text>
          <View style={styles.statsRow}>
            {STATS.map((item) => (
              <View key={item.label} style={styles.statCard}>
                <Text style={styles.statLabel}>{item.label}</Text>
                <Text style={styles.statValue}>{item.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.progressWrapper}>
            <Text style={styles.progressText}>Progress keseluruhan</Text>
            <Text style={styles.progressPercent}>65%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '65%' }]} />
          </View>

          <View style={[styles.card, styles.projectCard]}>
            <View style={styles.projectHeader}>
              <View>
                <Text style={styles.projectTitle}>Renovasi Dapur</Text>
                <Text style={styles.projectSubtitle}>Jl. Mawar No. 15, Tangerang Selatan</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.muted} />
            </View>
            <View style={styles.metaRow}>
              <Ionicons name="calendar-outline" size={16} color={colors.muted} />
              <Text style={styles.metaText}>Target selesai 20 Des</Text>
            </View>
            <View style={styles.metaRow}>
              <Ionicons name="color-wand-outline" size={16} color={colors.muted} />
              <Text style={styles.metaText}>Arsitek: Ir. Ahmad</Text>
              <Ionicons name="construct-outline" size={16} color={colors.muted} />
              <Text style={styles.metaText}>Mandor: Pak Joko</Text>
            </View>

            <View style={styles.quickActions}>
              <TouchableOpacity
                style={styles.outlineButton}
                activeOpacity={0.85}
                onPress={() => router.push('/(tabs)/laporan')}>
                <Text style={styles.outlineText}>Lihat Laporan Harian</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.outlineButton}
                activeOpacity={0.85}
                onPress={() => router.push('/(tabs)/bayar')}>
                <Text style={styles.outlineText}>Pembayaran Tertunda</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aksi Cepat</Text>
          <View style={styles.shortcutGrid}>
            {SHORTCUTS.map((item) => (
              <TouchableOpacity
                key={item.label}
                activeOpacity={0.9}
                style={styles.shortcutCard}
                onPress={() => router.push(item.route)}>
                <LinearGradient colors={item.gradient} style={styles.shortcutIconWrapper}>
                  <Ionicons name={item.icon} size={22} color="#FFFFFF" />
                </LinearGradient>
                <Text style={styles.shortcutLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
    paddingBottom: 56,
    paddingHorizontal: 20,
    gap: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  headerTitle: {
    fontSize: 18,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
  iconButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    ...shadows.card,
  },
  heroCard: {
    padding: 18,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadows.card,
  },
  heroTextWrapper: {
    gap: 4,
  },
  heroGreeting: {
    color: '#E7E9FF',
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
  },
  heroName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
  },
  heroSub: {
    color: '#E7E9FF',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
  avatarStub: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  consultCard: {
    backgroundColor: colors.card,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    ...shadows.card,
  },
  consultText: {
    flex: 1,
    gap: 4,
  },
  consultTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: colors.text,
  },
  consultBody: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: colors.muted,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 12,
    ...shadows.card,
  },
  statLabel: {
    fontSize: 12,
    color: colors.muted,
    fontFamily: 'Poppins_500Medium',
  },
  statValue: {
    marginTop: 6,
    fontSize: 16,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
  progressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  progressText: {
    fontSize: 14,
    color: colors.muted,
    fontFamily: 'Poppins_500Medium',
  },
  progressPercent: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: 'Poppins_700Bold',
  },
  progressTrack: {
    marginTop: 6,
    width: '100%',
    height: 8,
    borderRadius: 16,
    backgroundColor: '#E7E9FF',
  },
  progressFill: {
    height: '100%',
    borderRadius: 16,
    backgroundColor: colors.primary,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    gap: 14,
    ...shadows.card,
  },
  projectCard: {
    marginTop: 12,
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  projectTitle: {
    fontSize: 17,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
  projectSubtitle: {
    fontSize: 13,
    color: colors.muted,
    fontFamily: 'Poppins_400Regular',
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
  quickActions: {
    flexDirection: 'row',
    gap: 12,
  },
  outlineButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineText: {
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 13,
  },
  shortcutGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  shortcutCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    gap: 10,
    ...shadows.card,
  },
  shortcutIconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shortcutLabel: {
    fontSize: 13,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
});
