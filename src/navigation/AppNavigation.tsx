import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabNavigationParams } from '~/navigation/ScreenParams';
import { HomeScreen, IncomeScreen, AdventuresScreen, LibraryScreen } from '~/screens';
import { COLORS, SIZES } from '~/constants';
import HomeActiveSVG from '~/assets/icons/home_active.svg';
import HomeSVG from '~/assets/icons/home.svg';
import IncomeActiveSVG from '~/assets/icons/income_active.svg';
import IncomeSVG from '~/assets/icons/income.svg';
import AdventuresActiveSVG from '~/assets/icons/adventures_active.svg';
import AdventuresSVG from '~/assets/icons/adventures.svg';
import LibraryActiveSVG from '~/assets/icons/library_active.svg';
import LibrarySVG from '~/assets/icons/library.svg';

const AppTab = createBottomTabNavigator<TabNavigationParams>();

const AppNavigation: React.FC = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        tabBarStyle: {
          backgroundColor: COLORS.BLACK,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: SIZES.FONT_14,
          lineHeight: 16,
        },
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <AppTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <HomeActiveSVG />;
            } else {
              return <HomeSVG />;
            }
          },
        }}
      />
      <AppTab.Screen
        name="Income"
        component={IncomeScreen}
        options={{
          tabBarLabel: 'Income',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <IncomeActiveSVG />;
            } else {
              return <IncomeSVG />;
            }
          },
        }}
      />
      <AppTab.Screen
        name="Adventures"
        component={AdventuresScreen}
        options={{
          tabBarLabel: 'Adventures',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <AdventuresActiveSVG />;
            } else {
              return <AdventuresSVG />;
            }
          },
        }}
      />
      <AppTab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <LibraryActiveSVG />;
            } else {
              return <LibrarySVG />;
            }
          },
        }}
      />
    </AppTab.Navigator>
  );
};

export default AppNavigation;
