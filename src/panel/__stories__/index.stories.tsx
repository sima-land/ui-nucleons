import React from 'react';
import { Panel, Props } from '..';
import { marginBottom, marginRight } from '../../styling/sizes';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/information';

const variants: Props[] = [
  { color: 'gray4' },
  { color: 'additional-deep-red', contentColor: 'white' },
  { color: 'additional-teal', contentColor: 'white' },
  { color: 'additional-yellow' },
];

const longText = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Qui, dolorum? Voluptatibus ea blanditiis accusamus error',
  'accusantium beatae eum ratione aperiam temporibus magni',
  'non ipsum maiores officia nisi est dignissimos provident?',
].join(' ');

const markup = 'Lorem <i>ipsum</i> <b>dolor</b> sit.';

export default {
  title: 'Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <h3>Inline</h3>
    {variants.map((props, index) => (
      <Panel key={index} {...props} inline className={marginRight(4) as string}>
        Lorem ipsum
      </Panel>
    ))}

    <h3>Inline (with icon)</h3>
    {variants.map((props, index) => (
      <Panel key={index} {...props} inline className={marginRight(4) as string} icon={InfoSVG}>
        Lorem ipsum
      </Panel>
    ))}

    <h3>Inline (with icon and markup)</h3>
    {variants.map((props, index) => (
      <Panel
        key={index}
        {...props}
        inline
        className={marginRight(4) as string}
        icon={InfoSVG}
        html={markup}
      />
    ))}

    <h3>Block</h3>
    {variants.map((props, index) => (
      <Panel key={index} {...props} className={marginBottom(5) as string}>
        {longText}
      </Panel>
    ))}

    <h3>Block (with icon)</h3>
    {variants.map((props, index) => (
      <Panel key={index} {...props} className={marginBottom(5) as string} icon={InfoSVG}>
        {longText}
      </Panel>
    ))}

    <h3>Block (with icon and markup)</h3>
    {variants.map((props, index) => (
      <Panel
        key={index}
        {...props}
        className={marginBottom(5) as string}
        icon={InfoSVG}
        html={markup}
      />
    ))}
  </>
);
