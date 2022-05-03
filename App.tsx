import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { AuthProvider } from '~/context/auth';
import Navigation from '~/navigation';

const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle={'light-content'} />
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
