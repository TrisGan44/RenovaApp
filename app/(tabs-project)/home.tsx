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
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useSession } from '@/providers/SessionProvider';

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
    route: '/(tabs-project)/desain',
  },
  {
    label: 'Bayar',
    icon: 'card-outline' as const,
    gradient: ['#FFA63D', '#FF7B54'],
    route: '/(tabs-project)/bayar',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const { user, projects } = useSession();
  const activeProject = projects[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.headerRow}>
          <View style={styles.headerText}>
            <Text style={styles.heroGreeting}>Halo,</Text>
            <Text style={styles.heroName}>{user?.Nama_Lengkap || 'Pengguna'}</Text>
          </View>
          <Button
            variant="secondary"
            label="Notifikasi"
            leftIcon="notifications-outline"
            style={styles.headerButton}
            textStyle={{ fontSize: 12, fontFamily: 'Poppins_600SemiBold' }}
          />
        </View>

        <LinearGradient colors={gradients.primary} style={styles.heroCard}>
          <View style={styles.heroTextWrapper}>
            <Text style={styles.heroSub}>Selamat datang di RenovaPro</Text>
            <Text style={styles.heroGreeting}>Pantau progres renovasi rumahmu.</Text>
          </View>
          <View style={styles.avatarStub} />
        </LinearGradient>

        <Card style={styles.projectCard}>
          <SectionHeader title="Proyek Aktif" subtitle="Ringkasan proyek berjalan" />
          <View style={styles.metaRow}>
            <Ionicons name="home-outline" size={16} color={colors.muted} />
            <Text style={styles.metaText}>{activeProject?.nama_proyek || 'Proyek Utama'}</Text>
          </View>
          <View style={styles.metaRow}>
            <Ionicons name="calendar-outline" size={16} color={colors.muted} />
            <Text style={styles.metaText}>Mulai: {activeProject?.tgl_proyek || '—'}</Text>
          </View>
          <View style={styles.metaRow}>
            <Ionicons name="color-wand-outline" size={16} color={colors.muted} />
            <Text style={styles.metaText}>Arsitek: Ir. Ahmad</Text>
            <Ionicons name="construct-outline" size={16} color={colors.muted} />
            <Text style={styles.metaText}>Mandor: Pak Joko</Text>
          </View>

          <View style={styles.progressWrapper}>
            <Text style={styles.progressText}>Progress keseluruhan</Text>
            <Text style={styles.progressPercent}>65%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '65%' }]} />
          </View>

          <View style={styles.quickActions}>
            <Button
              variant="secondary"
              label="Laporan Harian"
              onPress={() => router.push('/(tabs-project)/laporan')}
              style={styles.quickButton}
              textStyle={styles.quickButtonText}
              leftIcon="document-text-outline"
            />
            <Button
              variant="secondary"
              label="Pembayaran"
              onPress={() => router.push('/(tabs-project)/bayar')}
              style={styles.quickButton}
              textStyle={styles.quickButtonText}
              leftIcon="card-outline"
            />
          </View>
        </Card>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aksi Cepat</Text>
          <View style={styles.shortcutGrid}>
            {SHORTCUTS.map((item) => (
              <Card key={item.label} style={styles.shortcutCard}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.shortcutInner}
                  onPress={() => router.push(item.route)}>
                  <LinearGradient colors={item.gradient} style={styles.shortcutIconWrapper}>
                    <Ionicons name={item.icon} size={22} color="#FFFFFF" />
                  </LinearGradient>
                  <Text style={styles.shortcutLabel}>{item.label}</Text>
                </TouchableOpacity>
              </Card>
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
    gap: 12,
  },
  headerText: {
    flex: 1,
  },
  headerButton: {
    minWidth: 120,
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
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
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
    gap: 10,
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
  quickButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
  },
  quickButtonText: {
    fontSize: 13,
  },
  shortcutGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  shortcutCard: {
    flex: 1,
    padding: 0,
  },
  shortcutInner: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 14,
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
