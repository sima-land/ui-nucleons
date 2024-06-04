import { Dropdown } from '@sima-land/ui-nucleons/dropdown';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { Spinner } from '@sima-land/ui-nucleons/spinner';

export default {
  title: 'common/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const fewItems = [...Array(5).keys()].map(n => n + 1);
  const lotOfItems = [...Array(25).keys()].map(n => n + 1);

  return (
    <>
      <h3>Вместе с DropdownItem</h3>
      <Dropdown style={{ width: 320 }}>
        {fewItems.map(item => (
          <DropdownItem size='s' key={item}>
            Элемент №{item}
          </DropdownItem>
        ))}
      </Dropdown>

      <h3>Вместе с DropdownItem и прокруткой</h3>
      <Dropdown style={{ width: 320 }}>
        {lotOfItems.map(item => (
          <DropdownItem size='l' key={item} endContent={`#${item}`}>
            Элемент №{item}
          </DropdownItem>
        ))}
      </Dropdown>

      <h3>Вместе со Spinner</h3>
      <Dropdown style={{ width: 320 }}>
        <div
          style={{
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spinner size='s' />
        </div>
      </Dropdown>
    </>
  );
}

Primary.storyName = 'Простой пример';
