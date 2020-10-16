import React from 'react';
import { mount, shallow } from 'enzyme';
import ModifiersWidget, { getSelectItem } from '..';
import ModifiersGroup from '../../group';
import Link from '../../../link/deprecated';
import isFunction from 'lodash/isFunction';

describe('<ModifiersWidget />', () => {
  it('should renders correctly without props', () => {
    const modifiersWidget = shallow(<ModifiersWidget />);

    expect(modifiersWidget).toMatchSnapshot();
  });

  it('should renders correctly with prop', () => {
    const onSelectItem = jest.fn();
    const modifiersWidget = mount(
      <ModifiersWidget
        title='test'
        items={['test']}
        sizesTableUrl='sima-land.ru'
        onSelectItem={onSelectItem}
      />
    );
    expect(modifiersWidget.find('h3').prop('className')).toEqual('modifiers-title');
    expect(modifiersWidget.find(Link).prop('className')).toEqual('modifiers-link');
    expect(modifiersWidget.find(ModifiersGroup).prop('items')).toEqual(['test']);
    expect(modifiersWidget.find(ModifiersGroup).prop('onSelectItem')).toEqual(onSelectItem);
    expect(modifiersWidget.find(ModifiersGroup).prop('getSelectItem')).toEqual(getSelectItem);
    expect(modifiersWidget).toMatchSnapshot();
  });
});

describe('getSelectItem()', () => {
  it('should return null if item is selected', () => {
    expect(getSelectItem(jest.fn(), { selected: true })).toBe(null);
  });

  it('should return function if item is not selected', () => {
    const onSelectItem = jest.fn();
    const item = { selected: false };
    const onClick = getSelectItem(onSelectItem, item);

    expect(isFunction(onClick)).toBe(true);

    onClick();
    expect(onSelectItem).toBeCalledWith(item);
  });
});
