import { Feather } from '@expo/vector-icons';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useState } from 'react';

type AuthFieldProps = TextInputProps & {
  label: string;
  icon: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  activeColor?: string;
  inactiveColor?: string;
  /**
   * Enables a password visibility toggle. When false the component behaves like a standard text input.
   */
  enableSecureToggle?: boolean;
};

export function AuthField({
  label,
  icon,
  containerStyle,
  style,
  activeColor = '#0C21C1',
  inactiveColor = '#D7D7E0',
  enableSecureToggle = false,
  secureTextEntry,
  autoCorrect,
  ...rest
}: AuthFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(Boolean(secureTextEntry));

  const shouldSecureToggle = enableSecureToggle || Boolean(secureTextEntry);
  const borderColor = isFocused ? activeColor : inactiveColor;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputWrapper, { borderBottomColor: borderColor }]}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
        <TextInput
          {...rest}
          style={[styles.input, style]}
          placeholderTextColor="#A0A3BD"
          selectionColor={activeColor}
          onFocus={(event) => {
            setIsFocused(true);
            rest.onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            rest.onBlur?.(event);
          }}
          secureTextEntry={shouldSecureToggle ? isSecure : secureTextEntry}
          autoCorrect={autoCorrect ?? false}
        />
        {shouldSecureToggle ? (
          <TouchableOpacity
            onPress={() => setIsSecure((prev) => !prev)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Feather name={isSecure ? 'eye-off' : 'eye'} size={18} color="#ABABAB" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 13,
    color: '#999999',
    marginBottom: 6,
    fontFamily: 'Poppins_500Medium',
  },
  inputWrapper: {
    borderBottomWidth: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    gap: 12,
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000842',
    fontFamily: 'Poppins_400Regular',
    paddingVertical: 0,
  },
});
