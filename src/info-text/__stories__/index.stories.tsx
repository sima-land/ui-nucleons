import React from 'react';
import { InfoText } from '..';

export default {
  title: 'common/InfoText',
  component: InfoText,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <div style={{ maxWidth: '800px', fontSize: '16px', lineHeight: '24px' }}>
      <InfoText onIconClick={() => alert('Вау! Действительно может!')}>
        Много много много текста в пару строк, а то и больше
      </InfoText>
    </div>
  );
}

Primary.storyName = 'Простой пример';
