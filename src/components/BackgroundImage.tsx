import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Container } from '~/constants/Styles';

interface BackgroundImageProps {
  children: any;
}

export default ({ children }: BackgroundImageProps) => {
  return (
    <Container>
      <ImageBackground
        source={require('~/assets/images/background.png')}
        style={styles.imgBackground}
      />
      <LinearGradient
        colors={[
          '#000D16F2',
          '#000D165E',
          '#000D1600',
          '#000D1682',
          '#000D16E7',
          '#000D16',
          '#000D16',
          '#000D16',
        ]}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.childContainer}>{children}</View>
    </Container>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    height: '80%',
    width: '100%',
    flex: 1,
  },
  childContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
