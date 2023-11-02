import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { useState } from 'react';
import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';
import { BSL_IGNORE_ATTR } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';
import { LoremIpsum } from '../../../.storybook/utils';

export default {
  title: 'common/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const defaultValue = '79998887766';
  const [key, setKey] = useState<number>(0);
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <>
      <PhoneInput
        key={key}
        value={value}
        onChange={(event, data) => {
          setValue(data.cleanValue);
        }}
        style={{ width: '320px' }}
      />

      <p data-testid='phone:clean-value'>Значение: {value || '[пусто]'}</p>

      <TextButton
        size='s'
        data-testid='phone:reset'
        onClick={() => {
          setKey(n => n + 1);
          setValue(defaultValue);
        }}
      >
        Сбросить
      </TextButton>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function Validation() {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  return (
    <PhoneInput
      style={{ width: 320 }}
      value={value}
      onFocus={() => {
        setError(null);
      }}
      onChange={(event, data) => {
        setValue(data.cleanValue);
        setError(null);
      }}
      onBlur={(event, data) => {
        !data.completed && setError('Поле не заполнено');
      }}
      failed={Boolean(error)}
      caption={error || 'Мы не будем звонить по этому номеру'}
    />
  );
}

Validation.storyName = 'Пример: проверка заполнения';

export function DefineCountryMask() {
  return (
    <>
      <article>
        <h3>Пустое значение - «Россия» по умолчанию</h3>
        <PhoneInput style={{ width: 320 }} defaultValue='' />
      </article>
      <article>
        <h3>Армения</h3>
        <PhoneInput style={{ width: 320 }} defaultValue='37422333444' />
      </article>
      <article>
        <h3>Грузия</h3>
        <PhoneInput style={{ width: 320 }} defaultValue='995111222333' />
      </article>
      <article>
        <h3>Узбекистан</h3>
        <PhoneInput style={{ width: 320 }} defaultValue='998556667777' />
      </article>
      <article>
        <h3>Неизвестный номер - «Другое»</h3>
        <PhoneInput style={{ width: 320 }} defaultValue='1234567890' />
      </article>
    </>
  );
}

DefineCountryMask.storyName = 'Пример: определение маски';

export function NativeNumberInputComparison() {
  // PhoneInput
  const defaultValue = '79501922700';
  const [value, setValue] = useState<string>(defaultValue);
  const [key, setKey] = useState<number>(0);

  // input[type=number]
  const defaultText = 'Hello';
  const [text, setText] = useState<string>(defaultText);

  return (
    <>
      <PhoneInput
        key={key}
        value={value}
        onChange={(event, data) => {
          setValue(data.cleanValue);
        }}
        style={{ width: '320px' }}
      />

      <p>Значение: {value || '[пусто]'}</p>

      <TextButton
        size='s'
        onClick={() => {
          setValue(defaultValue);
          setKey(n => n + 1);
        }}
      >
        Сбросить
      </TextButton>

      <p>
        {/* Firefox позволяет вводить в input[type=number] нечисловые значения */}
        <input
          type='number'
          value={text}
          onChange={event => {
            setText(event.target.value);
          }}
        />
      </p>

      <p>Значение: {text || '[пусто]'}</p>

      <TextButton
        size='s'
        onClick={() => {
          setText(defaultText);
        }}
      >
        Сбросить
      </TextButton>
    </>
  );
}

NativeNumberInputComparison.storyName = 'Тест: сравнение с input[type=number]';

export function TestInModal() {
  const [value, setValue] = useState<string>('');

  return (
    <Modal>
      <TopBar title='Тест' subtitle='PhoneInput внутри Modal' divided />
      <ModalBody>
        <div style={{ padding: 16 }}>
          <LoremIpsum paragraphCount={10} />

          <PhoneInput
            label='Номер'
            value={value}
            onChange={event => setValue(event.target.value)}
            dropdownProps={{ viewportProps: { [BSL_IGNORE_ATTR as any]: true } }}
          />

          <LoremIpsum paragraphCount={10} />
        </div>
      </ModalBody>
      <BottomBar divided>
        <CleanGroup>
          <CleanButton>Ясно</CleanButton>
        </CleanGroup>
      </BottomBar>
    </Modal>
  );
}

TestInModal.storyName = 'Тест: в модальном окне';
