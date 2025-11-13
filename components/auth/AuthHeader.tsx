import { Image, ImageSourcePropType, StyleSheet, View, ViewProps, Text } from 'react-native';

const HERO_IMAGE = require('@/assets/images/Saly-10.png') as ImageSourcePropType;

type AuthHeaderProps = ViewProps & {
  /**
   * Optional headline shown next to the Renova logo.
   */
  headline?: string;
};

export function AuthHeader({ style, headline = 'Renova', ...rest }: AuthHeaderProps) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <Text style={styles.brand}>{headline}</Text>
      <View style={styles.illustrationWrapper}>
        <Image source={HERO_IMAGE} resizeMode="contain" style={styles.hero} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000842',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },
  illustrationWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  hero: {
    width: 195,
    height: 143,
  },
});
