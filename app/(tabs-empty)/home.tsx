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
import { useSession } from '@/providers/SessionProvider';

export default function EmptyHomeScreen() {
  const router = useRouter();
  const { user } = useSession();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.headerRow}>
          <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={22} color={colors.text} />
          </TouchableOpacity>
          <View style={styles.headerText}>
            <Text style={styles.greeting}>Halo,</Text>
            <Text style={styles.name}>{user?.Nama_Lengkap || 'Pengguna Baru'}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
            <Ionicons name="person-circle-outline" size={28} color={colors.text} />
          </TouchableOpacity>
        </View>

        <LinearGradient colors={gradients.primary} style={styles.heroCard}>
          <View style={styles.heroTextWrapper}>
            <Text style={styles.heroTitle}>Kamu belum memiliki proyek.</Text>
            <Text style={styles.heroSub}>
              Buat janji dengan kami untuk memulai renovasi rumahmu.
            </Text>
            <Button
              label="Buat Janji Pertama"
              onPress={() => router.push('/(tabs-empty)/janji')}
              style={styles.heroButton}
              textStyle={{ color: colors.primary }}
              variant="secondary"
            />
          </View>
          <View style={styles.heroIconWrapper}>
            <Ionicons name="home-outline" size={52} color="#FFFFFF" />
          </View>
        </LinearGradient>

        <Card style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Ionicons name="information-circle-outline" size={22} color={colors.primary} />
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Belum ada proyek</Text>
              <Text style={styles.infoBody}>
                Buat janji, tunggu konfirmasi admin, lalu proyek kamu otomatis muncul di dashboard.
              </Text>
            </View>
          </View>
          <Button
            variant="secondary"
            label="Lihat Riwayat Janji"
            onPress={() => router.push('/(tabs-empty)/janji')}
          />
        </Card>
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
    paddingBottom: 48,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  iconButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    ...shadows.card,
  },
  headerText: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  greeting: {
    fontSize: 13,
    color: colors.muted,
    fontFamily: 'Poppins_500Medium',
  },
  name: {
    fontSize: 18,
    color: colors.text,
    fontFamily: 'Poppins_700Bold',
  },
  heroCard: {
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    ...shadows.card,
  },
  heroTextWrapper: {
    flex: 1,
    gap: 8,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
  },
  heroSub: {
    color: '#E7E9FF',
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
  },
  heroButton: {
    backgroundColor: '#FFFFFF',
  },
  heroIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoCard: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 12,
  },
  infoText: {
    flex: 1,
    gap: 4,
  },
  infoTitle: {
    fontSize: 15,
    color: colors.text,
    fontFamily: 'Poppins_700Bold',
  },
  infoBody: {
    fontSize: 13,
    color: colors.muted,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 18,
  },
});
