import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors, gradients, shadows } from '@/constants/theme';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function PaymentScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();

  const handlePay = () => {
    Alert.alert('Pembayaran', 'Simulasi pembayaran berhasil.');
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <SectionHeader title="Bayar Tagihan" subtitle={`ID tagihan: ${id ?? 'pelunasan'}`} />

        <LinearGradient colors={gradients.primary} style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Renovasi Dapur</Text>
          <Text style={styles.amount}>Rp 25.000.000</Text>
          <Text style={styles.summarySub}>Pembayaran tahap berikutnya</Text>
        </LinearGradient>

        <Card style={styles.detailCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Metode</Text>
            <Text style={styles.detailValue}>Transfer Bank</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Jatuh tempo</Text>
            <Text style={styles.detailValue}>20/12/2025</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>No. Virtual Account</Text>
            <View style={styles.vaRow}>
              <Text style={styles.vaText}>8808 9988 7766</Text>
              <Ionicons name="copy-outline" size={18} color={colors.primary} />
            </View>
          </View>
        </Card>

        <Button label="Bayar Sekarang" onPress={handlePay} />
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
  summaryCard: {
    marginTop: 10,
    borderRadius: 18,
    padding: 16,
    gap: 8,
    ...shadows.card,
  },
  summaryTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Poppins_600SemiBold',
  },
  amount: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Poppins_700Bold',
  },
  summarySub: {
    fontSize: 13,
    color: '#E9E7FF',
    fontFamily: 'Poppins_400Regular',
  },
  detailCard: {
    gap: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: colors.muted,
    fontFamily: 'Poppins_500Medium',
  },
  detailValue: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
  vaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  vaText: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins_700Bold',
  },
});
