import { SuperEllipseClipPath } from '@sima-land/ui-nucleons/super-ellipse-clip-path';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export const meta = {
  category: 'Утилиты/SuperEllipseClipPath',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function () {
  const id = 'some-string-here';

  return (
    <>
      <div
        style={{
          width: 80,
          height: 80,
          background: COLORS.get('additional-pink'),
          clipPath: `url(#${id})`,
        }}
      />

      <SuperEllipseClipPath id={id} />
    </>
  );
}
