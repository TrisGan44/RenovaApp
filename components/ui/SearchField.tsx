import { Feather } from '@expo/vector-icons';
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

type SearchFieldProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
};

export function SearchField({ containerStyle, style, ...rest }: SearchFieldProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconBadge}>
        <Feather name="search" size={16} color="#FFFFFF" />
      </View>
      <TextInput
        {...rest}
        style={[styles.input, style]}
        placeholderTextColor="#5E5F75"
        selectionColor="#0C21C1"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#F1F3FF',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 32,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 4,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#AEB9E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#050522',
    fontFamily: 'Poppins_500Medium',
    paddingVertical: 0,
  },
});
