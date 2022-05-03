import React from 'react';
import { Formik, FormikFormProps } from 'formik';

interface FormProps {
  initialValues: any;
  validationSchema: any;
  onSubmit: (values: any) => void | Promise<any>;
  children: any;
}

function Form({
  initialValues,
  validationSchema,
  children,
  onSubmit,
}: FormProps & FormikFormProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
}

export default Form;
