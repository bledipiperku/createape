import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import {
  TextInput,
  KeyboardType,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInputProps,
} from 'react-native';

import ErrorMessage from './ErrorMessage';
import { COLORS, SIZES } from '~/constants';
import EyeIcon from '~/assets/icons/eye.svg';
import EyeOffIcon from '~/assets/icons/eye_off.svg';
import AlertIcon from '~/assets/icons/alert.svg';
import { HeaderText } from '~/constants/Styles';

interface FormFieldProps {
  title: string;
  placeholder: string;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  name: string;
  innerRef?: any;
  customErrorText?: string | null;
  onSubmitEditing?: () => void;
}

function FormField({
  title,
  placeholder = '',
  keyboardType = 'default',
  secureTextEntry = false,
  name,
  innerRef,
  customErrorText,
  onSubmitEditing,
  ...otherProps
}: FormFieldProps & TextInputProps) {
  const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();

  const [secureText, setSecureText] = useState<boolean>(secureTextEntry);

  const toggleSecureEntry = () => {
    setSecureText(visible => !visible);
  };

  // @ts-ignore
  const error = errors[name] && touched[name];

  return (
    <View style={styles.inputContainer}>
      <HeaderText>{title}</HeaderText>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.GRAY}
        keyboardType={keyboardType}
        secureTextEntry={secureText}
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => {
          setFieldValue(name, text);
        }}
        onSubmitEditing={onSubmitEditing}
        // @ts-ignore
        value={values[name]}
        ref={innerRef}
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize="none"
        blurOnSubmit={false}
        {...otherProps}
      />
      {secureTextEntry ? (
        <TouchableOpacity onPress={toggleSecureEntry} style={styles.iconContainer}>
          {secureText ? <EyeIcon /> : <EyeOffIcon />}
        </TouchableOpacity>
      ) : error ? (
        <View style={styles.iconContainer}>
          <AlertIcon />
        </View>
      ) : null}
      {errors && touched && (
        //@ts-ignore
        <ErrorMessage error={errors[name] || customErrorText} visible={touched[name]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    paddingBottom: 50,
  },
  input: {
    fontSize: SIZES.FONT_18,
    lineHeight: 24,
    color: COLORS.WHITE,
    paddingVertical: 10,
    borderBottomColor: COLORS.WHITE,
    borderBottomWidth: 1,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 12,
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    top: 50,
  },
});

export default FormField;
