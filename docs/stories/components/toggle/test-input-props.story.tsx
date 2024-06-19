import { Toggle } from '@sima-land/ui-nucleons/toggle';

export const meta = {
  category: 'Компоненты/Toggle',
  title: 'Тест: Обработка свойств',
};

export default function TestInputProps() {
  function noop() {
    return void 0;
  }

  return (
    <>
      <h3>Uncontrolled without props</h3>
      <Toggle onChange={noop} />

      <h3>Uncontrolled with defaultChecked</h3>
      <Toggle onChange={noop} defaultChecked />

      <h3>Checked</h3>
      <Toggle onChange={noop} checked />

      <h3>Unchecked</h3>
      <Toggle onChange={noop} checked={false} />

      <h3>Disabled</h3>
      <Toggle onChange={noop} disabled />

      <h3>Disabled + checked</h3>
      <Toggle onChange={noop} checked disabled />
    </>
  );
}
