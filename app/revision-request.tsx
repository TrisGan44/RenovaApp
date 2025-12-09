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
        <SectionHeader title="Ajukan Revisi" subtitle="Kirim permintaan revisi desain ke arsitek." />

        <Card style={styles.card}>
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
        </Card>

        <Button label="Kirim Permohonan" onPress={handleSubmit} />
        <Button variant="secondary" label="Batal" onPress={router.back} />
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
});
