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

export default function EditProfileScreen() {
  const [name, setName] = useState('Budi Santoso');
  const [email, setEmail] = useState('budi.santoso@email.com');
  const [phone, setPhone] = useState('+62 812-3456-7890');
  const [address, setAddress] = useState('Jakarta Selatan, DKI Jakarta');
  const router = useRouter();

  const handleSave = () => {
    Alert.alert('Profil tersimpan', 'Perubahan data profil disimpan (dummy).');
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Text style={styles.title}>Edit Profil</Text>
        <Text style={styles.subtitle}>Perbarui data pribadi Anda.</Text>

        <View style={styles.card}>
          <View style={styles.field}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Nama"
              placeholderTextColor={colors.muted}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor={colors.muted}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Telepon</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Nomor telepon"
              keyboardType="phone-pad"
              placeholderTextColor={colors.muted}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Alamat</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={setAddress}
              placeholder="Alamat"
              placeholderTextColor={colors.muted}
            />
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.primaryButton} onPress={handleSave}>
          <Text style={styles.primaryText}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.secondaryButton} onPress={router.back}>
          <Text style={styles.secondaryText}>Batal</Text>
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
  primaryButton: {
    marginTop: 6,
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
