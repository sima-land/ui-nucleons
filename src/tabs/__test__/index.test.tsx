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

  it('items should handle children', async () => {
    const { container } = render(
      <Tabs>
        <Tabs.Item>One</Tabs.Item>
        <Tabs.Item>Two</Tabs.Item>
        <Tabs.Item>Three</Tabs.Item>
      </Tabs>,
    );

    expect(container.textContent).toBe('OneTwoThree');
  });
});
