import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '@/constants/theme';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function DesignDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <SectionHeader title="Detail Desain" subtitle={`ID desain: ${id ?? 'N/A'}`} />

        <Card style={styles.card}>
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
        </Card>

        <Button label="Ajukan Revisi" onPress={() => router.push('/revision-request')} />
        <Button variant="secondary" label="Kembali" onPress={router.back} />
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
  card: {
    marginTop: 10,
    gap: 12,
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
});
