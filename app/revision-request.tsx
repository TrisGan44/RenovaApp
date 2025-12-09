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

export default function RevisionRequestScreen() {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (!title.trim() || !detail.trim()) {
      Alert.alert('Revisi', 'Isi judul dan deskripsi revisi.');
      return;
    }
    Alert.alert('Revisi dikirim', 'Tim arsitek akan meninjau permintaan Anda.');
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Text style={styles.title}>Ajukan Revisi</Text>
        <Text style={styles.subtitle}>Kirim permintaan revisi desain ke arsitek.</Text>

        <View style={styles.card}>
          <View style={styles.field}>
            <Text style={styles.label}>Judul Revisi</Text>
            <TextInput
              style={styles.input}
              placeholder="Contoh: Revisi kabinet dapur"
              placeholderTextColor={colors.muted}
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Deskripsi Detail</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Jelaskan detail perubahan yang diinginkan..."
              placeholderTextColor={colors.muted}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              value={detail}
              onChangeText={setDetail}
            />
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.primaryButton} onPress={handleSubmit}>
          <Text style={styles.primaryText}>Kirim Permohonan</Text>
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
  multiline: {
    minHeight: 120,
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
