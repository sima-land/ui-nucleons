import { SuperEllipseClipPath } from '@sima-land/ui-nucleons/super-ellipse-clip-path';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export default {
  title: 'service/SuperEllipseClipPath',
  component: SuperEllipseClipPath,
  parameters: {
    layout: 'centered',
  },
};

export function Primary() {
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

Primary.storyName = 'Простой пример';
