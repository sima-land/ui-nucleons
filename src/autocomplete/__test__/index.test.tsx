import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act, Simulate } from 'react-dom/test-utils';
import { Autocomplete } from '..';
import { TextField } from '../../text-field';

describe('Autocomplete', () => {
  const findMenu = (w: ReactWrapper) => w.find('div[data-testid="autocomplete:menu"]');

  const findMenuItems = (w: ReactWrapper) => w
    .find('div[data-testid="autocomplete:menu"]')
    .find('div[role="menuitem"]');

  const isCheckedItem = (w: ReactWrapper) => w.getDOMNode().classList.contains('checked');

  const openMenu = (w: ReactWrapper) => {
    act(() => {
      Simulate.click(w.find(TextField).find('[data-testid="text-field:block"]').getDOMNode());
    });
    w.update();
  };

  it('should renders correctly', () => {
    const wrapper = mount(
      <Autocomplete
        value='Hello'
        items={[
          'U.S.',
          'France',
          'China',
          'Cambodia',
          'Chile',
          'Canada',
          'Poland',
          'Russia',
          'Belarus',
          'Ukraine',
        ]}
        renderItem={item => item.toUpperCase()}
      />
    );

    expect(wrapper.getDOMNode()).toMatchSnapshot();

    // preset "filled-only-list"
    wrapper.setProps({ preset: 'filled-only-list' });
    expect(wrapper.getDOMNode()).toMatchSnapshot();

    // with menu opened
    openMenu(wrapper);
    expect(wrapper.getDOMNode()).toMatchSnapshot();

    // loading state
    wrapper.setProps({ loading: true });
    expect(wrapper.getDOMNode()).toMatchSnapshot();
  });

  it('should handle "renderItem" prop missing', () => {
    const wrapper = mount(
      <Autocomplete
        value='Hello'
        items={[
          'aaaa',
          'bbbb',
          'cccc',
          'dddd',
          'eeee',
        ]}
      />
    );

    openMenu(wrapper);
    expect(wrapper.getDOMNode()).toMatchSnapshot();
  });

  it('should handle field change event', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Autocomplete
        value='ffff'
        items={[
          'aaaa',
          'bbbb',
          'cccc',
          'dddd',
          'eeee',
        ]}
        onChange={spy}
      />
    );

    expect(findMenu(wrapper)).toHaveLength(0);
    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.change(
        wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
        { target: { value: 'jjjj' } as any }
      );
    });
    wrapper.update();

    expect(findMenu(wrapper)).toHaveLength(1);
    expect(spy).toBeCalledTimes(1);
  });

  it('should handle defaultValue', () => {
    const wrapper = mount(
      <Autocomplete
        defaultValue='dddd'
        items={[
          'aaaa',
          'bbbb',
          'cccc',
        ]}
      />
    );

    expect(wrapper.getDOMNode()).toMatchSnapshot();
  });

  it('should handle outside click', () => {
    const wrapper = mount(
      <Autocomplete
        defaultValue='dddd'
        items={[
          'aaaa',
          'bbbb',
          'cccc',
        ]}
      />
    );

    openMenu(wrapper);
    expect(findMenu(wrapper)).toHaveLength(1);

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('click'));
    });
    wrapper.update();

    expect(findMenu(wrapper)).toHaveLength(0);
  });

  it('should handle menu item click', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Autocomplete
        defaultValue='0000'
        items={[
          'aaaa',
          'bbbb',
          'cccc',
          'dddd',
          'eeee',
          'ffff',
        ]}
        onSelect={spy}
      />
    );

    openMenu(wrapper);

    act(() => {
      Simulate.click(findMenuItems(wrapper).at(4).getDOMNode());
    });
    wrapper.update();

    expect(findMenu(wrapper)).toHaveLength(0);
    expect(spy).toBeCalledTimes(1);
  });

  describe('should handle field "keydown" event', () => {
    it('ArrowDown: no active item', () => {
      const spy = jest.fn();

      const wrapper = mount(
        <Autocomplete
          value='dddd'
          items={[
            'aaaa',
            'bbbb',
            'cccc',
          ]}
          onKeyDown={spy}
        />
      );

      openMenu(wrapper);
      expect(spy).toBeCalledTimes(0);

      act(() => {
        Simulate.keyDown(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
          { key: 'ArrowDown' }
        );
      });
      wrapper.update();

      expect(spy).toBeCalledTimes(1);
      expect(isCheckedItem(findMenuItems(wrapper).at(0))).toBe(true);
      expect(isCheckedItem(findMenuItems(wrapper).at(1))).toBe(false);
      expect(isCheckedItem(findMenuItems(wrapper).at(2))).toBe(false);
    });

    it('ArrowDown: with active item', () => {
      const wrapper = mount(
        <Autocomplete
          value='dddd'
          items={[
            'aaaa',
            'bbbb',
            'cccc',
          ]}
        />
      );

      openMenu(wrapper);

      act(() => {
        Simulate.keyDown(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
          { key: 'ArrowDown' }
        );
      });
      wrapper.update();

      // second press
      act(() => {
        Simulate.keyDown(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
          { key: 'ArrowDown' }
        );
      });
      wrapper.update();

      expect(isCheckedItem(findMenuItems(wrapper).at(0))).toBe(false);
      expect(isCheckedItem(findMenuItems(wrapper).at(1))).toBe(true);
      expect(isCheckedItem(findMenuItems(wrapper).at(2))).toBe(false);
    });

    it('ArrowUp', () => {
      const wrapper = mount(
        <Autocomplete
          value='dddd'
          items={[
            'aaaa',
            'bbbb',
            'cccc',
          ]}
        />
      );

      openMenu(wrapper);

      act(() => {
        Simulate.keyDown(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
          { key: 'ArrowUp' }
        );
      });
      wrapper.update();

      expect(isCheckedItem(findMenuItems(wrapper).at(0))).toBe(false);
      expect(isCheckedItem(findMenuItems(wrapper).at(1))).toBe(false);
      expect(isCheckedItem(findMenuItems(wrapper).at(2))).toBe(true);
    });

    it('Enter: no active item', () => {
      const spy = jest.fn();

      const wrapper = mount(
        <Autocomplete
          value='dddd'
          items={[
            'aaaa',
            'bbbb',
            'cccc',
          ]}
          onSelect={spy}
        />
      );

      act(() => {
        Simulate.focus(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode()
        );
      });
      wrapper.update();

      act(() => {
        Simulate.keyDown(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
          { key: 'Enter' }
        );
      });
      wrapper.update();

      expect(spy).toBeCalledTimes(0);
    });

    it('Enter: with active item', () => {
      const spy = jest.fn();

      const wrapper = mount(
        <Autocomplete
          value='dddd'
          items={[
            'aaaa',
            'bbbb',
            'cccc',
          ]}
          onSelect={spy}
        />
      );

      // focus
      act(() => {
        Simulate.focus(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode()
        );
      });
      wrapper.update();

      // mark first as active
      act(() => {
        Simulate.keyDown(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
          { key: 'ArrowDown' }
        );
      });
      wrapper.update();

      expect(spy).toBeCalledTimes(0);

      // press enter
      act(() => {
        Simulate.keyDown(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
          { key: 'Enter' }
        );
      });
      wrapper.update();

      expect(spy).toBeCalledTimes(1);
    });

    it('Enter: no items', () => {
      const spy = jest.fn();

      const wrapper = mount(
        <Autocomplete
          value='dddd'
          items={undefined}
          onSelect={spy}
        />
      );

      openMenu(wrapper);

      // focus
      act(() => {
        Simulate.focus(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode()
        );
      });
      wrapper.update();

      // press enter
      act(() => {
        Simulate.keyDown(
          wrapper.find(TextField).find('input[data-testid="text-field:field"]').getDOMNode(),
          { key: 'Enter' }
        );
      });
      wrapper.update();

      expect(spy).toBeCalledTimes(0);
    });
  });

  it('should handle onClick prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Autocomplete
        items={undefined}
        onClick={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    openMenu(wrapper);

    expect(spy).toBeCalledTimes(1);
  });
});
