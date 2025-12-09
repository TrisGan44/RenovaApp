import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AuthField } from '@/components/auth/AuthField';
import { AuthHeader } from '@/components/auth/AuthHeader';

const EMAIL_ICON = require('@/assets/images/message 1.png');
const USER_ICON = require('@/assets/images/user 1.png');
const LOCK_ICON = require('@/assets/images/padlock 1.png');

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!email.trim() || !name.trim() || !password.trim()) {
      Alert.alert('Daftar', 'Lengkapi semua kolom.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Daftar', 'Konfirmasi password tidak sama.');
      return;
    }
    router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          bounces={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.headerWrapper}>
            <AuthHeader headline="Gabung Renova" />
          </View>

          <View style={styles.body}>
            <Text style={styles.title}>Daftar</Text>
            <Text style={styles.subtitle}>Isi data untuk membuat akun baru.</Text>
            <View style={styles.loginRow}>
              <Text style={styles.subtitle}>Sudah punya akun?</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.loginButton}
                onPress={() => router.replace('/')}>
                <Text style={styles.loginLink}>Masuk</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.form}>
              <AuthField
                label="Nama Lengkap"
                placeholder="Masukkan nama lengkap"
                icon={USER_ICON}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                textContentType="name"
              />
              <AuthField
                label="Email"
                placeholder="Masukkan email"
                icon={EMAIL_ICON}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                textContentType="emailAddress"
              />
              <AuthField
                label="Password"
                placeholder="Buat password"
                icon={LOCK_ICON}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                enableSecureToggle
                textContentType="newPassword"
              />
              <AuthField
                label="Konfirmasi Password"
                placeholder="Ulangi password"
                icon={LOCK_ICON}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                enableSecureToggle
                textContentType="password"
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.ctaButton}
              onPress={handleRegister}>
              <Text style={styles.ctaText}>Buat Akun</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000842',
  },
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  headerWrapper: {
    marginHorizontal: -24,
    marginBottom: 32,
  },
  body: {
    gap: 12,
  },
  title: {
    fontSize: 30,
    color: '#000842',
    fontFamily: 'Poppins_600SemiBold',
  },
  subtitle: {
    fontSize: 16,
    color: '#0E0E2C',
    fontFamily: 'Poppins_400Regular',
  },
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  loginButton: {
    marginLeft: 4,
  },
  loginLink: {
    fontSize: 16,
    color: '#0C21C1',
    fontFamily: 'Poppins_600SemiBold',
  },
  form: {
    marginTop: 20,
    gap: 24,
  },
  ctaButton: {
    marginTop: 28,
    backgroundColor: '#0C21C1',
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    shadowColor: '#0C21C1',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Poppins_700Bold',
  },
});
