import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AuthHeader } from '@/components/auth/AuthHeader';

const PROJECT_DETAIL = {
  title: 'Renovasi Ruko',
  client: 'Udin Empat',
  location: 'Bekasi',
  budget: 'Rp. 120.000,00',
  description: 'Renovasi total ruko 3 lantai\nuntuk toko elektronik',
  progress: 0.7,
};

export default function ProjectDetailScreen() {
  const router = useRouter();
  const progressPercent = Math.round(PROJECT_DETAIL.progress * 100);

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
          <View style={styles.detailCard}>
            <Text style={styles.cardTitle}>{PROJECT_DETAIL.title}</Text>
            <Text style={styles.detailLabel}>
              Klien: <Text style={styles.detailValue}>{PROJECT_DETAIL.client}</Text>
            </Text>
            <Text style={styles.detailLabel}>
              Lokasi: <Text style={styles.detailValue}>{PROJECT_DETAIL.location}</Text>
            </Text>
            <Text style={styles.detailLabel}>
              Budget: <Text style={styles.detailValue}>{PROJECT_DETAIL.budget}</Text>
            </Text>
            <Text style={styles.detailLabel}>Deskripsi:</Text>
            <Text style={styles.description}>{PROJECT_DETAIL.description}</Text>
          </View>

          <View style={styles.progressSection}>
            <Text style={styles.progressLabel}>Progress:</Text>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${progressPercent}%` as `${number}%` },
                ]}
                accessibilityRole="progressbar"
                accessibilityValue={{
                  now: progressPercent,
                  min: 0,
                  max: 100,
                }}
              />
            </View>
            <Text style={styles.progressValue}>Progress: {progressPercent}%</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.primaryButton}
            onPress={() => router.push('/projects')}>
            <Text style={styles.primaryButtonText}>Lihat Aktivitas</Text>
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
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    paddingBottom: 28,
  },
  body: {
    marginTop: 32,
    gap: 28,
  },
  detailCard: {
    backgroundColor: '#EEF0FF',
    borderRadius: 30,
    padding: 24,
    gap: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 22,
    color: '#0E0E2C',
    fontFamily: 'Poppins_600SemiBold',
  },
  detailLabel: {
    fontSize: 16,
    color: '#4A4A68',
    fontFamily: 'Poppins_400Regular',
  },
  detailValue: {
    color: '#0E0E2C',
    fontFamily: 'Poppins_500Medium',
  },
  description: {
    fontSize: 16,
    color: '#4A4A68',
    fontFamily: 'Poppins_400Regular',
    lineHeight: 22,
  },
  progressSection: {
    gap: 12,
  },
  progressLabel: {
    fontSize: 18,
    color: '#0E0E2C',
    fontFamily: 'Poppins_500Medium',
  },
  progressTrack: {
    width: '100%',
    height: 16,
    backgroundColor: '#E1E5FF',
    borderRadius: 32,
    justifyContent: 'center',
    paddingHorizontal: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  progressFill: {
    height: 8,
    borderRadius: 32,
    backgroundColor: '#0C21C1',
  },
  progressValue: {
    fontSize: 15,
    color: '#8D8DAA',
    fontFamily: 'Poppins_400Regular',
  },
  primaryButton: {
    marginTop: 12,
    backgroundColor: '#0C21C1',
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    shadowColor: '#0C21C1',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Poppins_500Medium',
  },
});
