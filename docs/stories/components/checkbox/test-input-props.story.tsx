import { Checkbox } from '@sima-land/ui-nucleons/checkbox';

export const meta = {
  category: 'Компоненты/Checkbox',
  title: 'Тест: Обработка свойств',
};

export default function () {
  function noop() {
    return void 0;
  }

  return (
    <>
      <h3>Uncontrolled without props</h3>
      <Checkbox onChange={noop} />

      <h3>Uncontrolled with defaultChecked</h3>
      <Checkbox onChange={noop} defaultChecked />

      <h3>Checked</h3>
      <Checkbox onChange={noop} checked />

      <h3>Unchecked</h3>
      <Checkbox onChange={noop} checked={false} />

      <h3>Disabled</h3>
      <Checkbox onChange={noop} disabled />

      <h3>Disabled + checked</h3>
      <Checkbox onChange={noop} checked disabled />
    </>
  );
}
