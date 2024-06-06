import { Autocomplete } from '@sima-land/ui-nucleons/autocomplete';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { useCallback, useState } from 'react';

export const meta = {
  title: 'Загрузка списка',
  category: 'Компоненты/Autocomplete',
};

interface DataState {
  status: 'default' | 'fetch' | 'done' | 'fail';
  data: Array<{ id: number; name: string }>;
}

export default function ItemsFetch() {
  const [{ data, status }, setState] = useState<DataState>({ data: [], status: 'default' });
  const [value, setValue] = useState('');

  const fetchItems = useCallback(() => {
    if (status === 'fetch') {
      return;
    }

    setState({ data: [], status: 'fetch' });

    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
      new Promise(done => setTimeout(done, 500)),
    ])
      .then(([items]) => {
        setState({ data: items, status: 'done' });
      })
      .catch(() => {
        setState({ data: [], status: 'fail' });
      });
  }, [status]);

  const isQuery = useCallback((val: string) => val.length >= 3, []);

  return (
    <Autocomplete
      value={value}
      onChange={(event, { reason }) => {
        setValue(event.target.value);

        if (reason === 'suggestionSelect') {
          setState({ data: [], status: 'default' });
          return;
        }

        if (isQuery(event.target.value)) {
          fetchItems();
        }
      }}
      loading={status === 'fetch'}
      placeholder='Имя пользователя'
      caption='Например Leanne или Ervin'
      adornmentEnd={null}
      optionsStub={isQuery(value) && status !== 'default' ? undefined : null}
    >
      {isQuery(value) && data.map(item => <DropdownItem key={item.id}>{item.name}</DropdownItem>)}
    </Autocomplete>
  );
}
