import React from 'react';

type InputTypes = {
  type: string;
  name: string;
};

const Input = ({ type, name }: InputTypes) => {
  const [value, setValue] = React.useState('');

  return (
    <input
      type={type}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder='Insira aqui o nome da cidade'
      name={name}
    />
  );
};

export default Input;
