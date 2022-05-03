import React from 'react';
import { useFormikContext } from 'formik';

import Button from '../Button';

interface SubmitButtonProps {
  title: string;
  loading: boolean;
}

function SubmitButton({ title, loading }: SubmitButtonProps) {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <Button
      title={title}
      kind={'primary'}
      onPress={handleSubmit}
      disabled={!isValid}
      loading={loading}
    />
  );
}

export default SubmitButton;
