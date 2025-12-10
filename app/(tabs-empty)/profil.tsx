import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { ProfileScreen } from '@/components/screens/ProfileScreen';
import { colors } from '@/constants/theme';
import { useSession } from '@/providers/SessionProvider';

export default function ProfileEmptyScreen() {
  const { user, clearSession } = useSession();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <ProfileScreen
          name={user?.Nama_Lengkap}
          email={user?.email}
          address={user?.alamat}
          phone={user?.no_telp}
          onEdit={() => router.push('/edit-profile')}
          onLogout={() => {
            clearSession();
            router.replace('/');
          }}
        />
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
  },
});
