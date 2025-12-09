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
import { StatusPill } from '@/components/ui/StatusPill';

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

export default function BayarScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <SectionHeader title="Pembayaran" />

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
              style={styles.paymentTouchable}
              onPress={() => router.push({ pathname: '/payment', params: { id: item.id } })}>
              <Card style={styles.paymentCard}>
                <View style={styles.paymentHeader}>
                  <View>
                    <Text style={styles.paymentTitle}>{item.title}</Text>
                    <Text style={styles.paymentAmount}>{item.amount}</Text>
                  </View>
                  <StatusPill
                    label={item.status}
                    tone={item.status === 'Lunas' ? 'success' : 'warning'}
                    style={styles.paymentPill}
                  />
                </View>

                <View style={styles.dueRow}>
                  <Ionicons name="calendar-outline" size={16} color={colors.muted} />
                  <Text style={styles.dueText}>Jatuh tempo: {item.due}</Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        <Button label="Bayar Sekarang" onPress={() => router.push('/payment')} />
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
  paymentTouchable: {
    borderRadius: 16,
  },
  paymentCard: {
    gap: 8,
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
