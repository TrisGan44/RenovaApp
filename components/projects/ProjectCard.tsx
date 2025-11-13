import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

type ProjectDetail = {
  label: string;
  value: string;
};

type ProjectCardProps = {
  title: string;
  details: ProjectDetail[];
  actionLabel: string;
  onPressAction?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export function ProjectCard({
  title,
  details,
  actionLabel,
  onPressAction,
  containerStyle,
}: ProjectCardProps) {
  return (
    <View style={[styles.card, containerStyle]}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        {details.map((detail) => (
          <Text key={`${detail.label}-${detail.value}`} style={styles.detail}>
            {detail.label}:{' '}
            <Text style={styles.detailValue}>{detail.value}</Text>
          </Text>
        ))}
      </View>
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.actionButton}
        onPress={onPressAction}>
        <Text style={styles.actionLabel}>{actionLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#F1F3FF',
    borderRadius: 30,
    padding: 24,
    gap: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 18,
    elevation: 6,
  },
  info: {
    flex: 1,
    gap: 10,
  },
  title: {
    fontSize: 20,
    color: '#000842',
    fontFamily: 'Poppins_500Medium',
  },
  detail: {
    fontSize: 16,
    color: '#5C5C6D',
    fontFamily: 'Poppins_400Regular',
  },
  detailValue: {
    color: '#050522',
    fontFamily: 'Poppins_500Medium',
  },
  actionButton: {
    backgroundColor: '#0C21C1',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 18,
    shadowColor: '#0C21C1',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 4,
  },
  actionLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
});

