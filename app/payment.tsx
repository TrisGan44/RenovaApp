import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors, gradients, shadows } from '@/constants/theme';

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
        <Text style={styles.title}>Bayar Tagihan</Text>
        <Text style={styles.subtitle}>ID tagihan: {id ?? 'pelunasan'}</Text>

        <LinearGradient colors={gradients.primary} style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Renovasi Dapur</Text>
          <Text style={styles.amount}>Rp 25.000.000</Text>
          <Text style={styles.summarySub}>Pembayaran tahap berikutnya</Text>
        </LinearGradient>

        <View style={styles.detailCard}>
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
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.payButton} onPress={handlePay}>
          <Text style={styles.payText}>Bayar Sekarang</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.secondaryButton} onPress={router.back}>
          <Text style={styles.secondaryText}>Kembali</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: colors.text,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: colors.muted,
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
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 14,
    gap: 10,
    ...shadows.card,
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
  payButton: {
    marginTop: 6,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    ...shadows.card,
  },
  payText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
  },
  secondaryButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryText: {
    color: colors.text,
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
  },
});
