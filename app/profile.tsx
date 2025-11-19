import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AuthHeader } from '@/components/auth/AuthHeader';

const PROFILE = {
  name: 'Fathan ghazi',
  role: 'User',
  email: 'fathanghazi@gmail.com',
  phone: '0857348763446',
};

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <AuthHeader style={styles.hero} />
        </View>

        <View style={styles.body}>
          <View style={styles.profileCard}>
            <Text style={styles.title}>Profile Saya</Text>
            <View style={styles.avatar}>
              <View style={styles.avatarHead} />
              <View style={styles.avatarBody} />
            </View>
            <Text style={styles.name}>{PROFILE.name}</Text>
            <Text style={styles.role}>Role: {PROFILE.role}</Text>
            <Text style={styles.meta}>Email: {PROFILE.email}</Text>
            <Text style={styles.meta}>No Hp: {PROFILE.phone}</Text>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.logoutButton}
              onPress={() => router.replace('/')}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  heroContainer: {
    marginHorizontal: -32,
    marginTop: -24,
  },
  hero: {
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    paddingBottom: 28,
  },
  body: {
    marginTop: 32,
  },
  profileCard: {
    backgroundColor: '#EEF0FF',
    borderRadius: 30,
    paddingVertical: 36,
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    color: '#0E0E2C',
    fontFamily: 'Poppins_600SemiBold',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#0C21C1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: 10,
  },
  avatarHead: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
  },
  avatarBody: {
    width: 64,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  name: {
    fontSize: 24,
    color: '#000842',
    fontFamily: 'Poppins_600SemiBold',
  },
  role: {
    fontSize: 18,
    color: '#8D8DAA',
    fontFamily: 'Poppins_500Medium',
  },
  meta: {
    fontSize: 16,
    color: '#B2B2C4',
    fontFamily: 'Poppins_400Regular',
  },
  logoutButton: {
    marginTop: 12,
    backgroundColor: '#0C21C1',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 28,
    shadowColor: '#0C21C1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 7,
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
});

