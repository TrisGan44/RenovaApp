import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors, shadows } from '@/constants/theme';

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
        <Text style={styles.title}>Buat Janji Konsultasi</Text>
        <Text style={styles.subtitle}>Isi form untuk memulai renovasi impian Anda</Text>

        <View style={styles.card}>
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
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.primaryButton} onPress={handleSubmit}>
          <Text style={styles.primaryText}>Kirim Permohonan</Text>
        </TouchableOpacity>
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
  card: {
    marginTop: 10,
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 14,
    gap: 14,
    ...shadows.card,
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
  primaryButton: {
    marginTop: 4,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    ...shadows.card,
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: colors.muted,
    fontFamily: 'Poppins_500Medium',
  },
});
