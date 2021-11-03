import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, CustomTextInput, TextError, TextLabel} from './styles';

interface MyInputTextProps extends TextInputProps {
  label: string;
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
      {inputError && <TextError>{inputError}</TextError>}
    </Container>
  );
};

export default MyInputText;
