import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TabNavigationParams } from '~/navigation/ScreenParams';
import { Screen } from '~/components';
import { CenterItems, Title } from '~/constants/Styles';

type Props = NativeStackScreenProps<TabNavigationParams, 'Income'>;

const Income = ({}: Props) => {
  return (
    <Screen>
      <CenterItems>
        <Title>Income</Title>
      </CenterItems>
    </Screen>
  );
};

export default Income;
