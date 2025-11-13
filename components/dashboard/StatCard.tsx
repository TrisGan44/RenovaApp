import { StyleSheet, Text, View, ViewProps } from 'react-native';

type StatCardProps = ViewProps & {
  label: string;
  value: string | number;
};

export function StatCard({ label, value, style, ...rest }: StatCardProps) {
  return (
    <View style={[styles.card, style]} {...rest}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 90,
    paddingVertical: 20,
    borderRadius: 32,
    backgroundColor: '#F1F3FF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
  },
  value: {
    fontSize: 32,
    color: '#000842',
    fontFamily: 'Poppins_500Medium',
  },
  label: {
    marginTop: 4,
    fontSize: 16,
    color: '#050522',
    fontFamily: 'Poppins_500Medium',
  },
});
