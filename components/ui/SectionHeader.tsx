import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';

import { colors } from '@/constants/theme';

type SectionHeaderProps = ViewProps & {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle, style, ...rest }: SectionHeaderProps) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  title: {
    fontSize: 18,
    color: colors.text,
    fontFamily: 'Poppins_700Bold',
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted,
    fontFamily: 'Poppins_400Regular',
  },
});
