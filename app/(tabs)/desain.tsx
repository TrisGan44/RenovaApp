import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors, gradients } from '@/constants/theme';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatusPill } from '@/components/ui/StatusPill';

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

export default function DesainScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <SectionHeader title="Desain & Revisi" subtitle="Riwayat desain dari arsitek" />

        <Button
          label="Ajukan Revisi Baru"
          leftIcon="chatbox-ellipses-outline"
          onPress={() => router.push('/revision-request')}
          style={styles.primaryButton}
        />

        <View style={styles.list}>
          {DESIGNS.map((design) => (
            <Card key={design.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.cardTitle}>{design.title}</Text>
                  <View style={styles.dateRow}>
                    <Ionicons name="calendar-outline" size={16} color={colors.muted} />
                    <Text style={styles.dateText}>{design.date}</Text>
                  </View>
                </View>
                <StatusPill
                  label={design.status}
                  tone={design.status === 'Disetujui' ? 'success' : 'warning'}
                  style={styles.statusPill}
                />
              </View>

              <Text style={styles.description}>{design.description}</Text>

              <LinearGradient colors={gradients.soft} style={styles.preview}>
                <Ionicons name="document-outline" size={28} color={colors.primary} />
              </LinearGradient>

              <Button
                variant="secondary"
                label="Lihat Detail"
                onPress={() =>
                  router.push({ pathname: '/design-detail', params: { id: design.id } })
                }
              />
            </Card>
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
  primaryButton: {
    marginTop: 12,
  },
  list: {
    marginTop: 10,
    gap: 16,
  },
  card: {
    gap: 12,
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
});
