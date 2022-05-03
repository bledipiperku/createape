import React from 'react';

import { useAuth } from '~/context/auth';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const Navigation: React.FC = () => {
  const { logged } = useAuth();

  return logged ? <AppNavigation /> : <AuthNavigation />;
};

export default Navigation;
