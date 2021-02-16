import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../index';
import PlusSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/plus';

const types = ['primary', 'secondary'];
const sizes = ['small', 'medium'];
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

storiesOf('Button', module)
  .add('All types, states, sizes', () => (
    <Fragment>
      {types.map(actionType => (
        <Fragment key={actionType}>
          <h2>Action type: {actionType}</h2>

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
                          {...(state ? { [state]: true } : {})}
                          size={size}
                          actionType={actionType}
                          onClick={action(`${actionType} ${size} button was clicked!`)}
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
    </Fragment>
  ));
