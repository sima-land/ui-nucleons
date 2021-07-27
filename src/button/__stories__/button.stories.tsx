import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '..';
import PlusSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/plus';

const types = ['primary', 'secondary'];
const sizes = ['s', 'm'];
const states = [undefined, 'disabled'];

const contents = [
  {
    icon: PlusSVG,
  },
  {
    children: 'Действие',
  },
  {
    icon: PlusSVG,
    children: 'Действие',
  },
  {
    icon: PlusSVG,
    iconPosition: 'end',
    children: 'Действие',
  },
];

export default {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    {types.map(viewType => (
      <Fragment key={viewType}>
        <h2>Action type: {viewType}</h2>

        {sizes.map(size => (
          <Fragment key={size}>
            <h3>Size: {size}</h3>
            {states.map((state, stateIndex) => (
              <Fragment key={stateIndex}>
                <h4>State: {state || 'normal'}</h4>

                <div style={{ display: 'flex' }}>
                  {contents.map((content, index) => (
                    <Fragment key={index}>
                      <Button
                        {...(state ? { [state]: true } : {}) as any}
                        size={size as any}
                        viewType={viewType as any}
                        onClick={action(`${viewType} [size="${size}"] button was clicked!`)}
                        {...content}
                      />
                      <div style={{ width: 8, height: 8 }}></div>
                    </Fragment>
                  ))}
                </div>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </Fragment>
    ))}
  </>
);
