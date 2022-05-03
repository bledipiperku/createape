import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { AuthNavigationParams } from '~/navigation/ScreenParams';
import { BackgroundImage, Button } from '~/components';
import { Container, Description, SubTitle } from '~/constants/Styles';

type Props = NativeStackScreenProps<AuthNavigationParams, 'Welcome'>;

const Welcome = ({ navigation }: Props) => {
  const handleNavigation = () => {
    navigation.navigate('Get Started');
  };

  return (
    <BackgroundImage>
      <Container style={styles.container}>
        <SubTitle>Welcome</SubTitle>
        <Description style={styles.description}>
          Obtain unfiltered insight on how others like you excel at life and business on a daily
          basis.
        </Description>
        <Button title="Get Started" kind="primary" margin onPress={handleNavigation} />
      </Container>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    paddingBottom: 60,
    paddingHorizontal: 40,
  },
  description: {
    lineHeight: 24,
  },
});

export default Welcome;
