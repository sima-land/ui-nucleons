import { SuperEllipseClipPath } from '@sima-land/ui-nucleons/super-ellipse-clip-path';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export const meta = {
  category: 'Утилиты/SuperEllipseClipPath',
  title: 'Простой пример',
  parameters: {
    layout: 'centered',
  },
};

export default function Primary() {
  const ID = 'some-string-here';

  return (
    <>
      <div
        style={{
          width: 80,
          height: 80,
          background: COLORS.get('additional-pink'),
          clipPath: `url(#${ID})`,
        }}
      />

      <SuperEllipseClipPath id={ID} />
    </>
  );
}
