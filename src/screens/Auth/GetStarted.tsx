import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { AuthNavigationParams } from '~/navigation/ScreenParams';
import { BackgroundImage, Button } from '~/components';
import { Container, Title } from '~/constants/Styles';

type Props = NativeStackScreenProps<AuthNavigationParams, 'Get Started'>;

const GetStarted = ({ navigation }: Props) => {
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <BackgroundImage>
      <Container style={styles.container}>
        <Title style={styles.title}>
          Gain access to a large, highly influential network of entrepreneurs
        </Title>
        <Button title="Apply Now!" kind="primary" margin onPress={handleRegister} />
        <Button title="Log in" kind="secondary" margin onPress={handleLogin} />
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
  title: {
    width: 260,
  },
});

export default GetStarted;
