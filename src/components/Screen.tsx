import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BackButton from '~/assets/icons/back.svg';

import { COLORS } from '~/constants';
import { Container } from '~/constants/Styles';

interface ScreenProps {
  children: any;
  backButton?: boolean;
  onBackBtnPress?: () => void;
}

function Screen({ children, backButton, onBackBtnPress }: ScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <Container style={[styles.screen, { paddingTop: insets.top }]}>
      {backButton ? (
        <View style={styles.backBtnContainer}>
          <TouchableOpacity onPress={onBackBtnPress}>
            <BackButton />
          </TouchableOpacity>
        </View>
      ) : null}
      {children}
    </Container>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.SCREEN_BACKGROUND,
    padding: 40,
  },
  backBtnContainer: {
    marginTop: 30,
    marginBottom: 20,
    width: 30,
  },
});

export default Screen;
