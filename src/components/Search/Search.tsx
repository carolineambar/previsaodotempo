import React, { SyntheticEvent } from 'react';
import { Form, Input, Button, Icon } from './Search.styles';

type SearchProps = {
  name: string;
  id: string;
  submitSearch: (term: string) => void;
};

const Search: React.FC<SearchProps> = ({ name, id, submitSearch }) => {
  const [value, setValue] = React.useState('');
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    submitSearch(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id={id}
        name={name}
        type='text'
        placeholder='Insira aqui o nome da cidade'
        aria-label='Insira aqui o nome da cidade'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button aria-label='Buscar'>
        <Icon />
      </Button>
    </Form>
  );
};

export default Search;
