import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';

import { colors } from '@/constants/theme';

type Tone = 'success' | 'warning' | 'info';

type StatusPillProps = ViewProps & {
  label: string;
  tone?: Tone;
};

const toneStyles: Record<Tone, { bg: string; text: string }> = {
  success: { bg: '#E8F9F1', text: colors.success },
  warning: { bg: '#FFF4E6', text: colors.warning },
  info: { bg: '#EEF0FF', text: colors.primary },
};

export function StatusPill({ label, tone = 'info', style, ...rest }: StatusPillProps) {
  const palette = toneStyles[tone];
  return (
    <View
      style={[
        styles.pill,
        {
          backgroundColor: palette.bg,
        },
        style,
      ]}
      {...rest}>
      <Text style={[styles.text, { color: palette.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 18,
  },
  text: {
    fontSize: 13,
    fontFamily: 'Poppins_600SemiBold',
  },
});
