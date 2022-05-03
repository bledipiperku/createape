import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FormikErrors, FormikTouched } from 'formik';

import { COLORS, SIZES } from '../../constants';

interface ErrorMessageProps {
  error: FormikErrors<unknown> | string;
  visible: FormikTouched<unknown> | boolean;
  color?: string;
}

function ErrorMessage({ error, visible, color }: ErrorMessageProps) {
  if (!visible || !error) {
    return null;
  }

  return <Text style={{ ...styles.error, ...{ color: color || COLORS.ALERT } }}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: { fontSize: SIZES.FONT_14 },
});

export default ErrorMessage;
