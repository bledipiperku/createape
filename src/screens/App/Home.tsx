import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TabNavigationParams } from '~/navigation/ScreenParams';
import { Screen } from '~/components';
import { AppText, CenterItems, Title } from '~/constants/Styles';
import styled from 'styled-components';
import { useAuth } from '~/context/auth';

type Props = NativeStackScreenProps<TabNavigationParams, 'Home'>;

const Home = ({}: Props) => {
  const { logOut } = useAuth();

  async function handleLogout() {
    await logOut();
  }

  return (
    <Screen>
      <CenterItems>
        <Title>Home</Title>
        <LogoutContainer onPress={handleLogout}>
          <AppText>Log out</AppText>
        </LogoutContainer>
      </CenterItems>
    </Screen>
  );
};

export const LogoutContainer = styled(TouchableOpacity)({
  position: 'absolute',
  right: 0,
  top: 40,
});

export default Home;
