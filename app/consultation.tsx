import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors } from '@/constants/theme';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function ConsultationScreen() {
  const [type, setType] = useState('');
  const [goal, setGoal] = useState('');
  const [address, setAddress] = useState('');
  const [detail, setDetail] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (!type.trim() || !goal.trim()) {
      Alert.alert('Form belum lengkap', 'Isi jenis dan tujuan renovasi.');
      return;
    }
    Alert.alert('Permohonan terkirim', 'Tim kami akan menghubungi Anda dalam 1x24 jam.');
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <SectionHeader
          title="Buat Janji Konsultasi"
          subtitle="Isi form untuk memulai renovasi impian Anda"
        />

        <Card style={styles.card}>
          <View style={styles.field}>
            <Text style={styles.label}>Jenis Renovasi</Text>
            <TextInput
              style={styles.input}
              placeholder="Pilih jenis renovasi"
              placeholderTextColor={colors.muted}
              value={type}
              onChangeText={setType}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Tujuan Renovasi</Text>
            <TextInput
              style={styles.input}
              placeholder="Contoh: Modernisasi, penambahan ruang, dll"
              placeholderTextColor={colors.muted}
              value={goal}
              onChangeText={setGoal}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Alamat Properti</Text>
            <TextInput
              style={styles.input}
              placeholder="Alamat lengkap properti yang akan direnovasi"
              placeholderTextColor={colors.muted}
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Deskripsi Detail</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Jelaskan detail kebutuhan renovasi Anda..."
              placeholderTextColor={colors.muted}
              value={detail}
              onChangeText={setDetail}
              multiline
              textAlignVertical="top"
              numberOfLines={5}
            />
          </View>
          <Text style={styles.helper}>Semakin detail deskripsi, semakin baik hasil konsultasi</Text>
        </Card>

        <Button label="Kirim Permohonan" onPress={handleSubmit} />
        <Text style={styles.footerText}>Tim kami akan menghubungi Anda dalam 1x24 jam</Text>
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
    padding: 14,
    gap: 14,
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 13,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
  input: {
    backgroundColor: '#F4F5FA',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins_500Medium',
  },
  multiline: {
    minHeight: 120,
  },
  helper: {
    fontSize: 12,
    color: colors.muted,
    fontFamily: 'Poppins_400Regular',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: colors.muted,
    fontFamily: 'Poppins_500Medium',
  },
});
