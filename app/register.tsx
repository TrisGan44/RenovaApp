import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.subtitle}>If you already have an account</Text>
            <View style={styles.loginRow}>
              <Text style={styles.subtitle}>You can</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.loginButton}
                onPress={() => router.replace('/')}>
                <Text style={styles.loginLink}>Login here !</Text>
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
                label="Username"
                placeholder="Enter your User name"
                icon={USER_ICON}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="words"
                textContentType="username"
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
              <AuthField
                label="Confirm Password"
                placeholder="Confirm your Password"
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
              onPress={() => router.replace('/dashboard')}>
              <Text style={styles.ctaText}>Register</Text>
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
    gap: 32,
  },
  ctaButton: {
    marginTop: 36,
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
