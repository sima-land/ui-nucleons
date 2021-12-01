import React from 'react';
import { render } from '@testing-library/react';
import { Tabs } from '..';

describe('<Tabs />', () => {
  it('should renders correctly', async () => {
    const { container, findAllByTestId } = render(
      <Tabs>
        <Tabs.Item name='One' />
        <Tabs.Item name='Two' disabled />
        <Tabs.Item name='Three' selected />
        <Tabs.Item name='Four' />
      </Tabs>,
    );

    expect(container).toMatchSnapshot();
    expect(await findAllByTestId('tabs')).toHaveLength(1);
    expect(await findAllByTestId('tab')).toHaveLength(4);
  });
});
