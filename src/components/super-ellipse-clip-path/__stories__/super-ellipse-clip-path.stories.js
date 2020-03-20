import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import SuperEllipseClipPath from '../';

const CLIP_PATH_ID = 'this-is-ID';

storiesOf('SuperEllipseClipPath', module)
  .add('Crop element with path SuperEllipse', () => (
    <Fragment>
      <p>
        Обрезка выполняется в инлайн стилях:
        <br />
        <code>style=&#123;&#123; clipPath: &apos;url(#id)&apos; &#125;&#125;</code>
      </p>
      <div
        style={{
          margin: 50,
          width: 150,
          height: 150,
          background: '#aaa',

          // Свойство clipPath задает обрезку, ссылаясь на ID, с которым создан компонент SuperEllipseClipPath.
          clipPath: `url(#${CLIP_PATH_ID})`,
        }}
      />
      <SuperEllipseClipPath id={CLIP_PATH_ID} />
    </Fragment>
  ));
