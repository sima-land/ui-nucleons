import { Autocomplete } from '@sima-land/ui-nucleons/autocomplete';
import { useCallback, useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';

export default {
  title: 'common/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
};

interface State {
  status: 'default' | 'fetch' | 'done' | 'fail';
  data: Array<{ id: number; name: string }>;
}

export function ItemsFetch() {
  const [value, setValue] = useState('');
  const [{ data, status }, setState] = useState<State>({ data: [], status: 'default' });

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
      onChange={(event, meta) => {
        setValue(event.target.value);

        if (meta.reason === 'suggestionSelect') {
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

ItemsFetch.storyName = 'Загрузка списка';
