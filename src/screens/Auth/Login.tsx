import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { AuthNavigationParams } from '~/navigation/ScreenParams';
import { AlertModal, Screen } from '~/components';
import { AppText, Title } from '~/constants/Styles';
import { Form, FormField, SubmitButton } from '~/components/Form';
import { useAuth } from '~/context/auth';

type Props = NativeStackScreenProps<AuthNavigationParams, 'Login'>;

interface LoginFormProps {
  email: string;
  password: string;
}
const Login = ({ navigation }: Props) => {
  const { logIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [customErrorText, setCustomErrorText] = useState<string | null>(null);
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const ref_input = useRef<TextInput>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Please enter your email').email().label('Email'),
    password: Yup.string()
      .required('Please enter your password')
      .label('Password')
      .min(6, 'Password must have more than 6 characters '),
  });

  async function handleLogin(values: LoginFormProps) {
    setLoading(true);
    setTimeout(() => {
      if (values.email !== 'hello@gmail.com') {
        setCustomErrorText('The email entered is not registered');
        setLoading(false);
      } else if (values.password !== '12345678') {
        setEmail(values.email);
        setModalVisible(true);
        setLoading(false);
        setForgotPasswordVisible(true);
      } else {
        logIn();
      }
    }, 1000);
  }

  return (
    <Screen backButton onBackBtnPress={handleGoBack}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Title style={styles.title}>Log In</Title>
        <Form
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
        >
          <FormField
            title="Email"
            name="email"
            placeholder="Type your email"
            keyboardType="email-address"
            onSubmitEditing={() => ref_input?.current?.focus()}
            customErrorText={customErrorText}
          />
          <FormField
            title="Password"
            name="password"
            placeholder="Type your password"
            secureTextEntry={true}
            innerRef={ref_input}
          />
          {forgotPasswordVisible ? (
            <TouchableOpacity>
              <AppText style={styles.forgotPasswordText}>Forgot password?</AppText>
            </TouchableOpacity>
          ) : null}
          <View style={styles.btnContainer}>
            <SubmitButton title="Sign in" loading={loading} />
            <AppText style={styles.footerText}>
              {'Not a member? '}
              <AppText style={styles.boldFooterText} onPress={handleRegister}>
                Join the club
              </AppText>
            </AppText>
          </View>
        </Form>
      </KeyboardAwareScrollView>
      <AlertModal
        visible={modalVisible}
        title={'Incorrect\npassword'}
        message={'The password you entered for '}
        subMessage={' is incorrect. Please Try again.'}
        email={email}
        btnTitle="Try Again"
        onClose={closeModal}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 55,
  },
  btnContainer: {
    marginTop: 100,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 30,
  },
  boldFooterText: {
    fontWeight: '700',
  },
  forgotPasswordText: {
    position: 'absolute',
    right: 0,
    bottom: 30,
  },
});

export default Login;
