import { Autocomplete, AutocompleteProps } from '@sima-land/ui-nucleons/autocomplete';
import { ChangeEvent, useCallback, useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { FieldBlockSize } from '@sima-land/ui-nucleons/field-block';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { LoremIpsum, Sandbox } from '../../../.storybook/utils';
import { BSL_IGNORE_ATTR } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Autocomplete label='Ваш браузер' caption='Например Chrome'>
        <DropdownItem>Chrome</DropdownItem>
        <DropdownItem>Safari</DropdownItem>
        <DropdownItem>Firefox</DropdownItem>
        <DropdownItem>Edge</DropdownItem>
        <DropdownItem>Arc</DropdownItem>
        <DropdownItem>Opera</DropdownItem>
        <DropdownItem>Yandex.Browser</DropdownItem>
        <DropdownItem>Internet Explorer</DropdownItem>
      </Autocomplete>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function FilledOnlyList() {
  const [value, setValue] = useState('');

  const items = [
    'Chrome',
    'Safari',
    'Firefox',
    'Edge',
    'Arc',
    'Opera',
    'Yandex.Browser',
    'Internet Explorer',
  ];

  return (
    <Autocomplete
      value={value}
      onChange={event => setValue(event.target.value)}
      placeholder='Ваш браузер'
      caption='Например Chrome'
      adornmentEnd={null}
    >
      {value.length > 0
        ? items.map((item, index) => <DropdownItem key={index}>{item}</DropdownItem>)
        : null}
    </Autocomplete>
  );
}

FilledOnlyList.storyName = 'Список только после ввода значения';

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

export function DifferentStates() {
  const [value, setValue] = useState<string>('');
  const [size, setSize] = useState<FieldBlockSize>('l');
  const [state, setState] = useState<'default' | 'failed' | 'disabled'>('default');
  const [loading, setLoading] = useState<boolean>(false);

  const autocompleteProps: AutocompleteProps = {
    value,
    size,
    label: 'Номер',
    disabled: state === 'disabled',
    failed: state === 'failed',
    onChange: e => setValue(e.target.value),
    caption: 'Это ни на что не повлияет',
    loading,
  };

  const items = [
    { value: 'Ноль' },
    { value: 'Один', disabled: true },
    { value: 'Два' },
    { value: 'Три' },
    { value: 'Четыре' },
    { value: 'Пять' },
    { value: 'Шесть' },
    { value: 'Семь' },
    { value: 'Восемь', disabled: true },
    { value: 'Девять', disabled: true },
    { value: 'Десять' },
  ];

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер поля',
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
            { value: 'l', displayName: 'L' },
          ],
          bind: [size as string, setSize],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: [
            { value: 'default', displayName: 'По умолчанию' },
            { value: 'failed', displayName: 'Ошибка' },
            { value: 'disabled', displayName: 'Отключено' },
          ],
        },
        {
          type: 'toggle',
          label: 'Загрузка',
          bind: [loading, setLoading],
        },
      ]}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Autocomplete {...autocompleteProps}>
          {items.map(item => (
            <DropdownItem key={item.value} disabled={item.disabled} value={item.value}>
              {item.value}
            </DropdownItem>
          ))}
        </Autocomplete>
      </div>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

export function TestNativeComparison() {
  const [value, setValue] = useState('');
  const values = ['Edge', 'Firefox', 'Chrome', 'Opera', 'Safari'];

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Autocomplete size='s' value={value} onChange={onChange}>
        {values.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </Autocomplete>

      <input list='browsers' value={value} onChange={onChange} />
      <datalist id='browsers'>
        {values.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>
    </div>
  );
}

TestNativeComparison.storyName = 'Тест: Сравнение с нативной реализацией';

export function TestInModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {/* для проверки блокировки прокрутки страницы */}
      <LoremIpsum paragraphCount={30} sentenceCount={30} />

      {open && (
        <Modal {...getResponsiveModalProps({ size: 'm' })} onClose={() => setOpen(false)}>
          <TopBar title='Тест' subtitle='Autocomplete внутри Modal' divided />
          <ModalBody withScrollDisable>
            <div style={{ padding: 16 }}>
              <LoremIpsum paragraphCount={10} />

              <Autocomplete
                placeholder='Номер'
                dropdownProps={{
                  viewportProps: {
                    [BSL_IGNORE_ATTR as any]: true,
                  },
                }}
              >
                <DropdownItem>Ноль</DropdownItem>
                <DropdownItem>Один</DropdownItem>
                <DropdownItem>Два</DropdownItem>
                <DropdownItem>Три</DropdownItem>
                <DropdownItem>Четыре</DropdownItem>
                <DropdownItem>Пять</DropdownItem>
                <DropdownItem>Шесть</DropdownItem>
                <DropdownItem>Семь</DropdownItem>
                <DropdownItem>Восемь</DropdownItem>
                <DropdownItem>Девять</DropdownItem>
                <DropdownItem>Десять</DropdownItem>
              </Autocomplete>

              <LoremIpsum paragraphCount={10} />
            </div>
          </ModalBody>
          <BottomBar divided>
            <CleanGroup>
              <CleanButton onClick={() => setOpen(false)}>Ясно</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Modal>
      )}
    </>
  );
}

TestInModal.storyName = 'Тест: В модальном окне';
