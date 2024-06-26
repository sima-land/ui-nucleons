import { SwitcherRow } from '@sima-land/ui-nucleons/switcher-row';
import { Checkbox } from '@sima-land/ui-nucleons/checkbox';
import { InfoText } from '@sima-land/ui-nucleons/info-text';

export const meta = {
  category: 'Компоненты/SwitcherRow',
  title: 'Вместе с InfoText',
};

export default function WithInfoText() {
  return (
    <SwitcherRow style={{ maxWidth: '400px' }}>
      <Checkbox id='example-checkbox' defaultChecked />
      <SwitcherRow.Label>
        <InfoText onIconClick={e => e.preventDefault()}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae commodi
          quos!
        </InfoText>
      </SwitcherRow.Label>
      <SwitcherRow.Comment>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam?
      </SwitcherRow.Comment>
    </SwitcherRow>
  );
}
