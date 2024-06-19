import {
  DropdownItem,
  DropdownItemProps,
  DropdownItemSize,
} from '@sima-land/ui-nucleons/dropdown-item';
import { useState } from 'react';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'Компоненты/DropdownItem',
  title: 'Различные состояния',
};

export default function () {
  const [size, setSize] = useState<DropdownItemSize>('s');
  const [state, setState] = useState<'default' | 'selected' | 'disabled'>('default');
  const [noHover, setNoHover] = useState<boolean>(false);
  const [startContent, setStartContent] = useState<boolean>(false);
  const [endContent, setEndContent] = useState<boolean>(false);
  const [comment, setComment] = useState<boolean>(true);

  const longText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia labore nam fugit libero tempore aliquam.';

  const props: DropdownItemProps = {
    size,
    disabled: state === 'disabled',
    selected: state === 'selected',
    noHover,
    comment: comment ? longText : null,
    startIcon: startContent ? PlaceholderSVG : undefined,
    endContent: endContent ? 'Текст' : null,
  };

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер',
          bind: [size, setSize],
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
            { value: 'l', displayName: 'L' },
            { value: 'xl', displayName: 'XL' },
          ],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: [
            { value: 'default', displayName: 'По умолчанию' },
            { value: 'selected', displayName: 'Выбрано' },
            { value: 'disabled', displayName: 'Отключено' },
          ],
        },
        {
          type: 'toggle',
          label: 'Отключить эффект при наведении',
          bind: [noHover, setNoHover],
        },
        {
          type: 'toggle',
          label: 'С иконкой в начале',
          bind: [startContent, setStartContent],
        },
        {
          type: 'toggle',
          label: 'С текстом в конце',
          bind: [endContent, setEndContent],
        },
        {
          type: 'toggle',
          label: 'С комментарием',
          bind: [comment, setComment],
          hidden: size !== 'xl',
        },
      ]}
      areaStyle={{
        background: '#ccc',
        borderColor: '#ccc',
      }}
    >
      <DropdownItem {...props}>{longText}</DropdownItem>
    </Sandbox>
  );
}
