import React from 'react';

import {TextInputProps} from 'react-native';

import {Container, CustomTextInput, TextLabel, TextError} from './styles';

interface MyInputTextProps extends TextInputProps {
  label?: string;
  inputError?: string;
}

const MyInputText: React.FC<MyInputTextProps> = ({
  label,
  inputError,
  ...rest
}) => {
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <CustomTextInput {...rest} />
      <TextError>{inputError}</TextError>
    </Container>
  );
};

export default MyInputText;
