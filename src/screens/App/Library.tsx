import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TabNavigationParams } from '~/navigation/ScreenParams';
import { Screen } from '~/components';
import { CenterItems, Title } from '~/constants/Styles';

type Props = NativeStackScreenProps<TabNavigationParams, 'Library'>;

const Library = ({}: Props) => {
  return (
    <Screen>
      <CenterItems>
        <Title>Library</Title>
      </CenterItems>
    </Screen>
  );
};

export default Library;
