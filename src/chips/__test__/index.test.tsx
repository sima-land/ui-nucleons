import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import { Chips } from '..';
import type { ChipsItemProps } from '../item';

describe('Chips', () => {
  it('should renders correctly', async () => {
    const spy = jest.fn();

    const items: ChipsItemProps[] = [
      { children: 'Ручка для пакета' },
      { children: 'Спортивные кружки' },
      { children: 'Пакеты пищевые' },
      { children: 'Пакеты для заморозки' },
      { children: 'Домашние животные', checked: true },
      { children: 'Дикие звери' },
      { children: 'Крафт пакеты' },
      { children: 'Интерьер' },
      { children: 'Зоотовары' },
    ];

    const { container, findAllByTestId } = render(
      <Chips>
        {items.map((item, index) => (
          <Chips.Item key={index} {...item} onClick={spy} />
        ))}
      </Chips>,
    );

    expect(container).toMatchSnapshot();
    expect(await findAllByTestId('chips')).toHaveLength(1);

    expect(spy).toBeCalledTimes(0);

    await act(async () => {
      Simulate.click((await findAllByTestId('chips:item'))[4]);
    });

    expect(spy).toBeCalledTimes(1);
  });

  it('should handle items with "href" property', async () => {
    const items: ChipsItemProps[] = [
      { children: 'Ручка для пакета' },
      { children: 'Спортивные кружки' },
      { children: 'Пакеты пищевые' },
    ].map(item => ({ ...item, href: 'www.foo-bar.com' }));

    const { container } = render(
      <Chips>
        {items.map((item, index) => (
          <Chips.Item key={index} {...item} />
        ))}
      </Chips>,
    );

    expect(
      container.querySelector<HTMLAnchorElement>('a[data-testid="chips:item"]')?.href,
    ).toContain('foo-bar');
  });

  it('should render with cross', () => {
    const items: ChipsItemProps[] = [
      { children: 'Ручка для пакета' },
      { children: 'Спортивные кружки' },
      { children: 'Пакеты пищевые' },
    ].map(item => ({ ...item, withCross: true }));

    const { container } = render(
      <Chips>
        {items.map((item, index) => (
          <Chips.Item key={index} {...item} />
        ))}
      </Chips>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should provide able to pass target props to anchor', async () => {
    const items: ChipsItemProps[] = [
      { href: 'https://www.foo.com', children: 'Foo', target: '_blank' },
      { href: 'https://www.bar.com', children: 'Bar', target: '_parent' },
    ];

    const { container } = render(
      <Chips>
        {items.map((item, index) => (
          <Chips.Item key={index} {...item} />
        ))}
      </Chips>,
    );

    const chips = container.querySelectorAll<HTMLAnchorElement>('a[data-testid="chips:item"]');

    expect(chips).toHaveLength(2);

    chips.forEach((elem, index) => {
      expect(elem.target).toBe(items[index].target);
    });
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(
      <Chips data-testid='custom-chips'>
        <Chips.Item>Hello</Chips.Item>
        <Chips.Item>World</Chips.Item>
      </Chips>,
    );

    expect(queryAllByTestId('chips')).toHaveLength(0);
    expect(queryAllByTestId('custom-chips')).toHaveLength(1);
  });
});
