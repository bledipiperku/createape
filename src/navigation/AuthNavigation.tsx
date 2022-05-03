import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigationParams } from '~/navigation/ScreenParams';
import { WelcomeScreen, GetStartedScreen, LoginScreen, RegisterScreen } from '~/screens/';

const AuthStack = createNativeStackNavigator<AuthNavigationParams>();

const AuthNavigation: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Get Started" component={GetStartedScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
