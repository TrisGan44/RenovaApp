import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';

import { colors, gradients, shadows } from '@/constants/theme';

type ProfileScreenProps = ViewProps & {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  onEdit?: () => void;
  onLogout?: () => void;
};

const STATS = [
  { label: 'Total', value: 3, icon: 'briefcase-outline' as const },
  { label: 'Aktif', value: 2, icon: 'time-outline' as const },
  { label: 'Selesai', value: 1, icon: 'checkmark-done-outline' as const },
];

const MENU_ITEMS = [
  { label: 'Notifikasi', icon: 'notifications-outline' as const },
  { label: 'Keamanan', icon: 'shield-checkmark-outline' as const },
  { label: 'Syarat & Ketentuan', icon: 'document-text-outline' as const },
  { label: 'Bantuan', icon: 'help-circle-outline' as const },
];

export function ProfileScreen({
  name = 'Budi Santoso',
  email = 'budi.santoso@email.com',
  phone = '+62 812-3456-7890',
  address = 'Jakarta Selatan, DKI Jakarta',
  onEdit,
  onLogout,
  style,
  ...rest
}: ProfileScreenProps) {
  const [isLight, setIsLight] = useState(true);

  return (
    <View style={[styles.container, style]} {...rest}>
      <LinearGradient colors={gradients.primary} style={styles.profileCard}>
        <View style={styles.profileTop}>
          <LinearGradient colors={gradients.soft} style={styles.avatar}>
            <Ionicons name="person" size={28} color={colors.primary} />
          </LinearGradient>
          <View style={styles.profileText}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.member}>Member sejak Nov 2025</Text>
          </View>
        </View>

        <View style={styles.contactRow}>
          <Ionicons name="mail-outline" size={16} color="#FFFFFF" />
          <Text style={styles.contactText}>{email}</Text>
        </View>
        <View style={styles.contactRow}>
          <Ionicons name="call-outline" size={16} color="#FFFFFF" />
          <Text style={styles.contactText}>{phone}</Text>
        </View>
        <View style={styles.contactRow}>
          <Ionicons name="location-outline" size={16} color="#FFFFFF" />
          <Text style={styles.contactText}>{address}</Text>
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.editButton} onPress={onEdit}>
          <Text style={styles.editText}>Edit Profil</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.statsRow}>
        {STATS.map((stat) => (
          <View key={stat.label} style={styles.statCard}>
            <Ionicons name={stat.icon} size={18} color={colors.primary} />
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.toggleRow}>
        <View>
          <Text style={styles.toggleTitle}>Mode Terang</Text>
          <Text style={styles.toggleSub}>Aktifkan mode gelap</Text>
        </View>
        <Switch
          value={isLight}
          onValueChange={setIsLight}
          thumbColor="#FFFFFF"
          trackColor={{ false: '#DCDCDC', true: colors.primary }}
        />
      </View>

      <View style={styles.menuList}>
        {MENU_ITEMS.map((item) => (
          <TouchableOpacity key={item.label} style={styles.menuItem} activeOpacity={0.85}>
            <View style={styles.menuLeft}>
              <Ionicons name={item.icon} size={18} color={colors.text} />
              <View>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Text style={styles.menuSub}>
                  {item.label === 'Notifikasi'
                    ? 'Kelola notifikasi aplikasi'
                    : item.label === 'Keamanan'
                      ? 'Ubah password & keamanan'
                      : item.label === 'Syarat & Ketentuan'
                        ? 'Baca syarat & ketentuan'
                        : 'Pusat bantuan & FAQ'}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.muted} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.brandCard}>
        <LinearGradient colors={gradients.primary} style={styles.brandIcon}>
          <Ionicons name="business-outline" size={26} color="#FFFFFF" />
        </LinearGradient>
        <View style={styles.brandTextWrapper}>
          <Text style={styles.brandTitle}>RenovaPro</Text>
          <Text style={styles.brandSub}>Versi 1.0.0</Text>
        </View>
        <Text style={styles.brandYear}>© 2025 RenovaPro</Text>
      </View>

      <TouchableOpacity activeOpacity={0.9} style={styles.logoutButton} onPress={onLogout}>
        <Ionicons name="log-out-outline" size={18} color="#E14646" />
        <Text style={styles.logoutText}>Keluar dari Akun</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  profileCard: {
    borderRadius: 18,
    padding: 16,
    gap: 10,
    ...shadows.card,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    gap: 2,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Poppins_700Bold',
  },
  member: {
    color: '#E9E7FF',
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contactText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
  },
  editButton: {
    marginTop: 6,
    backgroundColor: 'rgba(255,255,255,0.18)',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  editText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins_700Bold',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 6,
    ...shadows.card,
  },
  statValue: {
    fontSize: 18,
    color: colors.text,
    fontFamily: 'Poppins_700Bold',
  },
  statLabel: {
    fontSize: 12,
    color: colors.muted,
    fontFamily: 'Poppins_500Medium',
  },
  toggleRow: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadows.card,
  },
  toggleTitle: {
    fontSize: 15,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
  toggleSub: {
    fontSize: 13,
    color: colors.muted,
    fontFamily: 'Poppins_400Regular',
  },
  menuList: {
    backgroundColor: colors.card,
    borderRadius: 14,
    ...shadows.card,
  },
  menuItem: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuLabel: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins_600SemiBold',
  },
  menuSub: {
    fontSize: 12,
    color: colors.muted,
    fontFamily: 'Poppins_400Regular',
  },
  brandCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    gap: 8,
    ...shadows.card,
  },
  brandIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandTextWrapper: {
    alignItems: 'center',
  },
  brandTitle: {
    fontSize: 16,
    color: colors.text,
    fontFamily: 'Poppins_700Bold',
  },
  brandSub: {
    fontSize: 12,
    color: colors.muted,
    fontFamily: 'Poppins_400Regular',
  },
  brandYear: {
    fontSize: 12,
    color: colors.muted,
    fontFamily: 'Poppins_400Regular',
  },
  logoutButton: {
    marginTop: 8,
    backgroundColor: '#FFECEC',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  logoutText: {
    color: '#E14646',
    fontSize: 14,
    fontFamily: 'Poppins_700Bold',
  },
});
