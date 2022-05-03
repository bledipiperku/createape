import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { AuthNavigationParams } from '~/navigation/ScreenParams';
import { Screen } from '~/components';
import { AppText, Title } from '~/constants/Styles';
import { Form, FormField, SubmitButton } from '~/components/Form';
import { useAuth } from '~/context/auth';

type Props = NativeStackScreenProps<AuthNavigationParams, 'Register'>;

const Register = ({ navigation }: Props) => {
  const { logIn } = useAuth();

  const [email] = useState<string>('');
  const [password] = useState<string>('');
  const [confirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const ref_password = useRef<TextInput>();
  const ref_confirmPassword = useRef<TextInput>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigationRegister = () => {
    navigation.navigate('Register');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Please enter your email').email().label('Email'),
    password: Yup.string()
      .required('Please enter your password')
      .label('Password')
      .min(6, 'Password must have more than 6 characters '),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please enter your password'),
  });

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      logIn();
    }, 1500);
  };

  return (
    <Screen backButton onBackBtnPress={handleGoBack}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Title style={styles.title}>Register</Title>
        <Form
          initialValues={{
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <FormField
            title="Email"
            name="email"
            placeholder="Type your email"
            keyboardType="email-address"
            onSubmitEditing={() => ref_password?.current?.focus()}
          />
          <FormField
            title="Password"
            name="password"
            placeholder="Type your password"
            secureTextEntry={true}
            onSubmitEditing={() => ref_confirmPassword?.current?.focus()}
            innerRef={ref_password}
          />
          <FormField
            title="Confirm Password"
            name="confirmPassword"
            placeholder="Type your password"
            secureTextEntry={true}
            innerRef={ref_confirmPassword}
          />
          <SubmitButton title="Register" loading={loading} />
          <AppText style={styles.footerText}>
            {'Not a member? '}
            <AppText style={styles.boldFooterText} onPress={handleNavigationRegister}>
              Join the club
            </AppText>
          </AppText>
        </Form>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 55,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 30,
  },
  boldFooterText: {
    fontWeight: '700',
  },
});

export default Register;
