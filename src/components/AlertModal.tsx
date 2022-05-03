import React from 'react';
import Modal from 'react-native-modal';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '~/constants';
import Button from './Button';

interface AlertModalProps {
  visible: boolean;
  title: string;
  message: string;
  subMessage?: string;
  email: string;
  btnTitle: string;
  onClose: () => void;
}

function AlertModal({
  visible,
  title,
  message,
  subMessage,
  email,
  btnTitle,
  onClose,
}: AlertModalProps) {
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.subText}>
          {message}
          <Text style={[styles.subText, styles.boldText]}>{email}</Text>
          {subMessage}
        </Text>
        <View style={styles.buttonContainer}>
          <Button title={btnTitle} kind={'primary'} onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 65,
  },
  modalContainer: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 4,
  },
  headerText: {
    fontSize: 21,
    lineHeight: 24,
    color: '#010303',
    textAlign: 'center',
    fontWeight: '500',
  },
  subText: {
    fontSize: SIZES.FONT_16,
    color: '#010303',
    textAlign: 'center',
    marginTop: 24,
  },
  boldText: {
    fontWeight: '600',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    marginTop: 30,
  },
});

export default AlertModal;
