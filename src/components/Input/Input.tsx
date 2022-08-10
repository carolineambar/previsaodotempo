import React from 'react';
import { StyleSearch, StyleInput, StyleButton, Icon } from './Input.styles';

type InputTypes = {
  type: string;
  name: string;
};

const Input = ({ type, name }: InputTypes) => {
  const [value, setValue] = React.useState('');

  return (
    <StyleSearch>
      <StyleInput
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder='Insira aqui o nome da cidade'
        name={name}
      />
      <StyleButton>
        <Icon />
      </StyleButton>
    </StyleSearch>
  );
};

export default Input;
