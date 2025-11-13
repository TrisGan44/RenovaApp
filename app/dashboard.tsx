import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AuthHeader } from '@/components/auth/AuthHeader';
import { StatCard } from '@/components/dashboard/StatCard';

const STATS = [
  { label: 'Peta', value: 5 },
  { label: 'Aktif', value: 2 },
  { label: 'Selesai', value: 3 },
];

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <AuthHeader style={styles.hero} />
        </View>

        <View style={styles.body}>
          <Text style={styles.greeting}>Halo, Fathan!</Text>
          <Text style={styles.sectionTitle}>Proyek Kamu</Text>

          <View style={styles.statsRow}>
            {STATS.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.primaryButton}
            onPress={() => router.push('/projects')}>
            <Text style={styles.primaryButtonText}>Lihat Semua Proyek</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  heroContainer: {
    marginHorizontal: -32,
    marginTop: -24,
  },
  hero: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: 28,
  },
  body: {
    marginTop: 24,
    paddingTop: 0,
    gap: 28,
  },
  greeting: {
    fontSize: 32,
    color: '#000842',
    fontFamily: 'Poppins_500Medium',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#0E0E2C',
    fontFamily: 'Poppins_500Medium',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 14,
  },
  primaryButton: {
    marginTop: 20,
    backgroundColor: '#0C21C1',
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    shadowColor: '#0C21C1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 7,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Poppins_500Medium',
  },
});
