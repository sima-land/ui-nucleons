import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../index';

const testJustifyItems = [
  <Box padding={4} margin={4} dangerouslySetInlineStyle={{ __style: { background: 'red' } }}>First</Box>,
  <Box padding={4} margin={4} dangerouslySetInlineStyle={{ __style: { background: 'green' } }}>Second</Box>,
  <Box padding={4} margin={4} dangerouslySetInlineStyle={{ __style: { background: 'blue' } }}>Third</Box>,
];

const testAlignItems = [
  <Box
    padding={4}
    margin={4}
    dangerouslySetInlineStyle={{ __style: { minHeight: 50, background: 'red' } }}
  >
    First
  </Box>,
  <Box
    padding={4}
    margin={4}
    dangerouslySetInlineStyle={{ __style: { minHeight: 100, background: 'green' } }}
  >
    Second
  </Box>,
  <Box
    padding={4}
    margin={4}
    dangerouslySetInlineStyle={{ __style: { minHeight: 150, background: 'blue' } }}
  >
    Third
  </Box>,
];

/**
 * Возвращает тестовый компонент для проверки свойства "alignItems".
 * @param {string} alignItems Значение свойства.
 * @return {ReactElement} Тестовый компонент.
 */
const getTestAlignItemsBox = alignItems => (
  <Box
    padding={2}
    display='flex'
    alignItems={alignItems}
    dangerouslySetInlineStyle={{ __style: { height: 240, border: '1px dashed #aaa' } }}
    children={testAlignItems}
  />
);

/**
 * Возвращает тестовый компонент для проверки свойства "flex".
 * @param {string} flex Значение свойства.
 * @return {ReactElement} Тестовый компонент.
 */
const getTestFlexPropBox = flex => (
  <Box
    margin={4}
    padding={4}
    display='flex'
    flex={flex}
    dangerouslySetInlineStyle={{ __style: { background: '#aaa' } }}
    children={`flex='${flex}'`}
  />
);

storiesOf('Box', module)
  .add('Box without props', () => (
    <Box>
      Box without props is just a "div"
    </Box>
  ))
  .add('Margins and paddings', () => (
    <Box margin={4} padding={4}>
      Test box with margins = 4 and paddings = 4
    </Box>
  ))
  .add('"justifyContent" prop variations', () => (
    <Fragment>
      <h3>start</h3>
      <Box display='flex' justifyContent='start'>
        {testJustifyItems}
      </Box>

      <h3>end</h3>
      <Box display='flex' justifyContent='end'>
        {testJustifyItems}
      </Box>

      <h3>center</h3>
      <Box display='flex' justifyContent='center'>
        {testJustifyItems}
      </Box>

      <h3>space-between</h3>
      <Box display='flex' justifyContent='between'>
        {testJustifyItems}
      </Box>

      <h3>space-around</h3>
      <Box display='flex' justifyContent='around'>
        {testJustifyItems}
      </Box>
    </Fragment>
  ))
  .add('"alignItems" prop variations', () => (
    <Fragment>
      <h3>start</h3>
      {getTestAlignItemsBox('start')}

      <h3>end</h3>
      {getTestAlignItemsBox('end')}

      <h3>center</h3>
      {getTestAlignItemsBox('center')}

      <h3>baseline</h3>
      {getTestAlignItemsBox('baseline')}

      <h3>stretch</h3>
      {getTestAlignItemsBox('stretch')}
    </Fragment>
  ))
  .add('"direction" prop variations', () => (
    <Fragment>
      <h3>row</h3>
      <Box display='flex' direction='row'>
        {testJustifyItems}
      </Box>

      <h3>column</h3>
      <Box display='flex' direction='column'>
        {testJustifyItems}
      </Box>
    </Fragment>
  ))
  .add('"flex" prop variations', () => (
    <Fragment>
      <h3>shrink</h3>
      <Box display='flex'>
        {testJustifyItems}
        {getTestFlexPropBox('shrink')}
      </Box>

      <h3>grow</h3>
      <Box display='flex'>
        {testJustifyItems}
        {getTestFlexPropBox('grow')}
      </Box>

      <h3>none</h3>
      <Box display='flex'>
        {testJustifyItems}
        {getTestFlexPropBox('none')}
      </Box>
    </Fragment>
  ));

