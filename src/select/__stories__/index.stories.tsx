import { Select, SelectProps } from '@sima-land/ui-nucleons/select';
import { useState } from 'react';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { FieldBlockSize } from '@sima-land/ui-nucleons/field-block';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { BSL_IGNORE_ATTR } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';
import { TextButtonSize } from '@sima-land/ui-nucleons/text-button';
import { LargePage, LoremIpsum, Sandbox } from '../../../.storybook/utils';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';

type SelectOpener = 'field-block' | 'text-button';

export default {
  title: 'common/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select label='Номер' value={value} onValueChange={setValue}>
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function AsFieldBlock() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select
        label='Номер'
        value={value}
        onValueChange={setValue}
        opener={<Select.FieldBlock size='s' caption='Это ни на что не повлияет' />}
        dropdownProps={{ style: { width: '320px' } }}
      >
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </>
  );
}

AsFieldBlock.storyName = 'Кастомизация поля';

export function AsTextButton() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select
        label='Номер'
        value={value}
        onValueChange={setValue}
        opener={<Select.TextButton size='m' />}
        dropdownProps={{ style: { width: '200px' } }}
      >
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </>
  );
}

AsTextButton.storyName = 'Кастомизация кнопки';

export function DifferentStates() {
  const [value, setValue] = useState<string>('');
  const [opener, setOpener] = useState<SelectOpener>('field-block');
  const [fieldSize, setFieldSize] = useState<FieldBlockSize>('l');
  const [buttonSize, setButtonSize] = useState<TextButtonSize>('m');
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<'default' | 'disabled'>('default');

  const selectProps: SelectProps = {
    value,
    onValueChange: setValue,
    opener:
      opener === 'field-block' ? (
        <Select.FieldBlock size={fieldSize} caption='Простой пример' />
      ) : (
        <Select.TextButton size={buttonSize} />
      ),
    label: 'Номер',
    loading,
    disabled: state === 'disabled',
    dropdownProps: {
      style: {
        width: '320px',
      },
    },
  };

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Открывающий элемент',
          options: [
            { value: 'field-block', displayName: 'FieldBlock' },
            { value: 'text-button', displayName: 'TextButton' },
          ],
          bind: [opener, setOpener],
        },
        {
          type: 'select',
          hidden: opener !== 'field-block',
          label: 'Размер поля',
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
            { value: 'l', displayName: 'L' },
          ],
          bind: [fieldSize as string, setFieldSize],
        },
        {
          type: 'select',
          hidden: opener !== 'text-button',
          label: 'Размер кнопки',
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
          ],
          bind: [buttonSize, setButtonSize],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: [
            { value: 'default', displayName: 'По умолчанию' },
            { value: 'disabled', displayName: 'Отключено' },
          ],
        },
        {
          type: 'toggle',
          label: 'Загрузка списка',
          bind: [loading, setLoading],
        },
      ]}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Select {...selectProps}>
          <DropdownItem disabled>Ноль</DropdownItem>
          <DropdownItem>Один</DropdownItem>
          <DropdownItem>Два</DropdownItem>
          <DropdownItem disabled>Три</DropdownItem>
          <DropdownItem>Четыре</DropdownItem>
          <DropdownItem>Пять</DropdownItem>
          <DropdownItem disabled>Шесть</DropdownItem>
        </Select>
      </div>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

export function TestNativeCompare() {
  return (
    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Select defaultValue='Один' opener={<Select.FieldBlock size='s' />}>
        <DropdownItem size='s'>Один</DropdownItem>
        <DropdownItem size='s'>Два</DropdownItem>
        <DropdownItem size='s'>Три</DropdownItem>
      </Select>

      <select style={{ width: 240 }} defaultValue='Один'>
        <option>Один</option>
        <option>Два</option>
        <option>Три</option>
      </select>
    </div>
  );
}

TestNativeCompare.storyName = 'Тест: Сравнение с нативной реализацией';

export function TestAllDisabled() {
  return (
    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Select opener={<Select.FieldBlock size='s' />}>
        <DropdownItem disabled>Один</DropdownItem>
        <DropdownItem disabled>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
      </Select>

      <select style={{ width: 240 }}>
        <option disabled>Один</option>
        <option disabled>Два</option>
        <option disabled>Три</option>
      </select>
    </div>
  );
}

TestAllDisabled.storyName = 'Тест: Все опции недоступны';

export function TestFocus() {
  const [value, setValue] = useState<string>('');

  return (
    <LargePage>
      <Select label='Номер' value={value} onValueChange={setValue}>
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </LargePage>
  );
}

TestFocus.storyName = 'Тест: Фокусировка';

export function TestFieldOverflow() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select label='Номер' value={`${value} `.repeat(20).trim()} onValueChange={setValue}>
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
        <DropdownItem>Семь</DropdownItem>
        <DropdownItem>Восемь</DropdownItem>
        <DropdownItem>Девять</DropdownItem>
        <DropdownItem>Десять</DropdownItem>
      </Select>
    </>
  );
}

TestFieldOverflow.storyName = 'Тест: Переполнение поля';

export function TestInModal() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {/* для проверки блокировки прокрутки страницы */}
      <LoremIpsum paragraphCount={30} sentenceCount={30} />

      {open && (
        <Modal {...getResponsiveModalProps({ size: 'm' })} onClose={() => setOpen(false)}>
          <TopBar title='Тест' subtitle='Select внутри Modal' divided />
          <ModalBody withScrollDisable>
            <div style={{ padding: 16 }}>
              <LoremIpsum paragraphCount={10} />

              <Select
                label='Номер'
                value={value}
                onValueChange={setValue}
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
              </Select>

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
