/* eslint-disable react-native/no-inline-styles */
import React, { ComponentPropsWithoutRef, ElementType } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

import { COLORS } from '~/constants';
import { AppText } from '~/constants/Styles';

type ButtonType = 'primary' | 'secondary';

type ButtonProps<T extends ElementType> = {
  title?: string;
  kind: ButtonType;
  disabled?: boolean;
  margin?: boolean;
  loading?: boolean;
  onPress?: () => void;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = 'button'>({
  title = '',
  kind = 'primary',
  disabled = false,
  margin = false,
  loading = false,
  onPress,
  ...props
}: ButtonProps<T>) => {
  const backgroundColor = kind === 'primary' ? COLORS.PRIMARY : COLORS.TRANSPARENT;
  const borderColor = kind === 'primary' ? COLORS.PRIMARY : COLORS.WHITE;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.btnContainer,
        { backgroundColor, borderColor, opacity: disabled ? 0.4 : 1, marginTop: margin ? 20 : 0 },
      ]}
      onPress={onPress}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={COLORS.WHITE} />
      ) : (
        <AppText>{title}</AppText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderWidth: 1,
    borderRadius: 6,
  },
});

export default Button;
