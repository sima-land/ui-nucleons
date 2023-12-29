import { PinInput } from '@sima-land/ui-nucleons/pin-input';

export default {
  title: 'common/PinInput',
  component: PinInput,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <PinInput />
    </>
  );
}
