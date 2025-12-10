import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AuthField } from '@/components/auth/AuthField';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { usersApi } from '@/api/users';
import { projectsApi } from '@/api/projects';
import { useSession } from '@/providers/SessionProvider';

const EMAIL_ICON = require('@/assets/images/message 1.png');
const LOCK_ICON = require('@/assets/images/padlock 1.png');

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser, setProjects, setHasProject } = useSession();

  const handleLogin = () => {
    (async () => {
      if (!email.trim() || !password.trim()) {
        Alert.alert('Login', 'Email dan password wajib diisi.');
        return;
      }
      setLoading(true);
      try {
        const loginRes = await usersApi.login({ email, password });
        setUser(loginRes.user);

        const projects = await projectsApi.getAll();
        const mine = projects.filter((p) => `${p.id_user}` === `${loginRes.user.id_user}`);
        setProjects(mine);
        const hasActiveProject = mine.length > 0;
        setHasProject(hasActiveProject);

        router.replace(hasActiveProject ? '/(tabs-project)/home' : '/(tabs-empty)/home');
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Gagal login. Periksa kredensial Anda.';
        Alert.alert('Login gagal', message);
      } finally {
        setLoading(false);
      }
    })();
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
            <AuthHeader />
          </View>

          <View style={styles.body}>
            <Text style={styles.title}>Masuk</Text>
            <Text style={styles.subtitle}>
              Gunakan email dan kata sandi untuk melanjutkan ke Renova.
            </Text>
            <View style={styles.loginRow}>
              <Text style={styles.subtitle}>Belum punya akun?</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.loginButton}
                onPress={() => router.push('/register')}>
                <Text style={styles.loginLink}>Daftar di sini</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.form}>
              <AuthField
                label="Email"
                placeholder="Enter your email address"
                icon={EMAIL_ICON}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                textContentType="emailAddress"
              />
              <AuthField
                label="Password"
                placeholder="Enter your Password"
                icon={LOCK_ICON}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                enableSecureToggle
                textContentType="password"
              />
            </View>

            <View style={styles.helpersRow}>
              <Pressable
                onPress={() => setRememberMe((prev) => !prev)}
                hitSlop={8}
                style={styles.rememberWrapper}>
                <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                  {rememberMe ? <View style={styles.checkboxDot} /> : null}
                </View>
                <Text style={styles.rememberLabel}>Remember me</Text>
              </Pressable>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.forgotText}>Lupa kata sandi?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.ctaButton}
              onPress={handleLogin}
              disabled={loading}>
              <Text style={styles.ctaText}>{loading ? 'Memproses...' : 'Masuk'}</Text>
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
    fontFamily: 'Poppins_500Medium',
  },
  subtitle: {
    fontSize: 16,
    color: '#0E0E2C',
    fontFamily: 'Poppins_400Regular',
  },
  form: {
    marginTop: 24,
    gap: 28,
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
  helpersRow: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.4,
    borderColor: '#0C21C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#0C21C1',
  },
  checkboxDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  rememberLabel: {
    fontSize: 14,
    color: '#0E0E2C',
    fontFamily: 'Poppins_400Regular',
  },
  forgotText: {
    fontSize: 14,
    color: '#8D8DAA',
    fontFamily: 'Poppins_500Medium',
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
    fontFamily: 'Poppins_500Medium',
  },
});
