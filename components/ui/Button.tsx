import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { colors, shadows } from '@/constants/theme';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: ButtonVariant;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  leftIcon,
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  const palette = variantStyles[variant];

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.base,
        {
          backgroundColor: disabled ? '#DADFEA' : palette.background,
          borderColor: palette.border,
        },
        palette.withShadow ? shadows.card : null,
        style,
      ]}>
      {leftIcon ? (
        <Ionicons
          name={leftIcon}
          size={18}
          color={disabled ? '#8D8DAA' : palette.text}
          style={styles.icon}
        />
      ) : null}
      <Text
        style={[
          styles.text,
          {
            color: disabled ? '#8D8DAA' : palette.text,
          },
          textStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const variantStyles: Record<
  ButtonVariant,
  { background: string; text: string; border?: string; withShadow?: boolean }
> = {
  primary: { background: colors.primary, text: '#FFFFFF', withShadow: true },
  secondary: { background: '#F7F8FF', text: colors.text, border: colors.border },
  ghost: { background: 'transparent', text: colors.text, border: colors.border },
};

const styles = StyleSheet.create({
  base: {
    minHeight: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    flexDirection: 'row',
    gap: 8,
    borderWidth: 1,
  },
  text: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 15,
  },
  icon: {
    marginRight: 4,
  },
});
