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

type PaymentStatus = 'Lunas' | 'Pending';

const PAYMENT_ITEMS: {
  id: string;
  title: string;
  amount: string;
  due: string;
  status: PaymentStatus;
}[] = [
  {
    id: 'dp',
    title: 'DP 33%',
    amount: 'Rp 25.000.000',
    due: '20/11/2025',
    status: 'Lunas',
  },
  {
    id: 'cicil-1',
    title: 'Cicilan 1 - 33%',
    amount: 'Rp 25.000.000',
    due: '5/12/2025',
    status: 'Lunas',
  },
  {
    id: 'pelunasan',
    title: 'Pelunasan - 34%',
    amount: 'Rp 25.000.000',
    due: '20/12/2025',
    status: 'Pending',
  },
];

const statusPill: Record<PaymentStatus, { bg: string; text: string }> = {
  Lunas: { bg: '#E8F9F1', text: colors.success },
  Pending: { bg: '#FFF4E6', text: colors.warning },
};

export default function BayarScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Text style={styles.title}>Pembayaran</Text>

        <LinearGradient colors={gradients.primary} style={styles.summaryCard}>
          <View style={styles.summaryTop}>
            <Text style={styles.summaryTitle}>Renovasi Dapur</Text>
            <Ionicons name="wallet-outline" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.summaryRow}>
            <View style={styles.summaryColumn}>
              <Text style={styles.summaryLabel}>Total</Text>
              <Text style={styles.summaryValue}>Rp 75.000.000</Text>
            </View>
            <View style={styles.summaryColumn}>
              <Text style={styles.summaryLabel}>Dibayar</Text>
              <Text style={styles.summaryValue}>Rp 50.000.000</Text>
            </View>
            <View style={styles.summaryColumn}>
              <Text style={styles.summaryLabel}>Sisa</Text>
              <Text style={styles.summaryValue}>Rp 25.000.000</Text>
            </View>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '66%' }]} />
          </View>
        </LinearGradient>

        <Text style={styles.sectionTitle}>Rincian Pembayaran</Text>
        <View style={styles.list}>
          {PAYMENT_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              style={styles.paymentCard}
              onPress={() => router.push({ pathname: '/payment', params: { id: item.id } })}>
              <View style={styles.paymentHeader}>
                <View>
                  <Text style={styles.paymentTitle}>{item.title}</Text>
                  <Text style={styles.paymentAmount}>{item.amount}</Text>
                </View>
                <View
                  style={[
                    styles.paymentPill,
                    { backgroundColor: statusPill[item.status].bg },
                  ]}>
                  <Ionicons
                    name={item.status === 'Lunas' ? 'checkmark-circle' : 'alert-circle'}
                    size={16}
                    color={statusPill[item.status].text}
                  />
                  <Text
                    style={[
                      styles.paymentPillText,
                      { color: statusPill[item.status].text },
                    ]}>
                    {item.status}
                  </Text>
                </View>
              </View>

              <View style={styles.dueRow}>
                <Ionicons name="calendar-outline" size={16} color={colors.muted} />
                <Text style={styles.dueText}>Jatuh tempo: {item.due}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.payButton}
          onPress={() => router.push('/payment')}>
          <Text style={styles.payText}>Bayar Sekarang</Text>
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
    paddingBottom: 60,
    gap: 14,
  },
  title: {
    marginTop: 6,
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: colors.text,
  },
  summaryCard: {
    borderRadius: 20,
    padding: 16,
    gap: 12,
    ...shadows.card,
  },
  summaryTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryTitle: {
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: '#FFFFFF',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryColumn: {
    gap: 4,
  },
  summaryLabel: {
    fontSize: 13,
    color: '#E9E7FF',
    fontFamily: 'Poppins_500Medium',
  },
  summaryValue: {
    fontSize: 15,
    color: '#FFFFFF',
    fontFamily: 'Poppins_700Bold',
  },
  progressTrack: {
    marginTop: 8,
    width: '100%',
    height: 8,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  progressFill: {
    height: '100%',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 16,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
  list: {
    gap: 12,
  },
  paymentCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 14,
    gap: 8,
    ...shadows.card,
  },
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  paymentTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: colors.text,
  },
  paymentAmount: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: colors.muted,
    marginTop: 2,
  },
  paymentPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },
  paymentPillText: {
    fontSize: 13,
    fontFamily: 'Poppins_600SemiBold',
  },
  dueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dueText: {
    fontSize: 13,
    color: colors.muted,
    fontFamily: 'Poppins_500Medium',
  },
  payButton: {
    marginTop: 6,
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 18,
    alignItems: 'center',
    ...shadows.card,
  },
  payText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
  },
});
