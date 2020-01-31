import React from 'react';
import { mount, shallow } from 'enzyme';
import ModifiersGroup, {
  ModifiersGroup as PureModifiersGroup,
  defaultOnSelectItem,
  createHiddenNodeIndexFinder,
} from '../modifiers-group';
import ModifierButton from '../../modifier-button/modifier-button';
import classes from '../../modifiers.scss';
import prop from 'lodash/fp/prop';
import isFunction from 'lodash/isFunction';

jest.mock('../modifiers-group', () => {
  const original = jest.requireActual('../modifiers-group');
  return {
    ...original,
    __esModule: true,
    defaultOnSelectItem: jest.fn(original.defaultOnSelectItem),
    createHiddenNodeIndexFinder: jest.fn(original.createHiddenNodeIndexFinder),
  };
});

describe('<ModifiersGroup />', () => {
  /**
   * Возвращает тестовый список данных модификаторов.
   * @return {Array} Список данных модификаторов.
   */
  const getTestItems = () => [
    { content: 'Test 1' },
    { content: 'Test 2' },
    { content: 'Test 3' },
    { content: 'Test 4' },
    { content: 'Test 5' },
  ];
  it('should render without props', () => {
    const wrapper = mount(
      <ModifiersGroup />
    );
    expect(wrapper.find(`.${classes['modifiers-group']}`)).toHaveLength(1);
  });
  it('should call addGlobalListener on mount', () => {
    const spy = jest.fn();
    expect(spy).toHaveBeenCalledTimes(0);
    const wrapper = mount(
      <PureModifiersGroup
        addGlobalListener={spy}
      />
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toBe('resize');
    expect(spy.mock.calls[0][1]).toBe(wrapper.instance().resetVisibleNodesData);
  });
  it('should call checkVisibleNodes() on mount', () => {
    const wrapper = mount(
      <PureModifiersGroup />
    );
    jest.spyOn(wrapper.instance(), 'checkVisibleNodes');
    expect(wrapper.instance().checkVisibleNodes).toHaveBeenCalledTimes(0);
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().checkVisibleNodes).toHaveBeenCalledTimes(1);
  });
  it('should call instance.removeEventListener() on unmount', () => {
    const unsubscribe = jest.fn();
    const subscribe = jest.fn(() => unsubscribe);
    const wrapper = mount(
      <PureModifiersGroup addGlobalListener={subscribe} />
    );
    expect(unsubscribe).toHaveBeenCalledTimes(0);
    wrapper.instance().componentWillUnmount();
    expect(wrapper.instance().removeGlobalListener).toBe(unsubscribe);
    expect(unsubscribe).toHaveBeenCalledTimes(1);

    wrapper.instance().removeGlobalListener = null;
    expect(() => wrapper.instance().componentWillUnmount()).not.toThrow();
  });
  it('resetVisibleNodesData() should update state properly', () => {
    const wrapper = mount(
      <PureModifiersGroup />
    );
    wrapper.instance().setState({
      hasHiddenNodes: false,
      lastVisibleChildIndex: 10,
    });
    jest.spyOn(document.documentElement, 'offsetWidth', 'get')
      .mockImplementation(() => 500);
    wrapper.instance().resetVisibleNodesData();
    expect(wrapper.instance().state).toMatchObject({
      hasHiddenNodes: true,
      lastVisibleChildIndex: null,
    });
  });
  it('resetVisibleNodesData() shouldn`t update state properly', () => {
    const wrapper = mount(
      <PureModifiersGroup />
    );
    wrapper.instance().setState({
      hasHiddenNodes: false,
      lastVisibleChildIndex: 10,
    });
    wrapper.instance().resetVisibleNodesData();
    expect(wrapper.instance().state).toMatchObject({
      hasHiddenNodes: false,
      lastVisibleChildIndex: 10,
    });
  });
  it('checkVisibleNodes() should update state properly', () => {
    const wrapper = mount(
      <PureModifiersGroup
        items={getTestItems()}
      />
    );
    const containerEl = wrapper.instance().containerRef.current;
    const showingButtonEl = wrapper.instance().showingButtonRef.current;

    // подменяем значения высоты и отступа сверху у контейнера
    Object.defineProperty(containerEl, 'clientHeight', {
      value: 200,
    });
    Object.defineProperty(containerEl, 'offsetTop', {
      value: 10,
    });

    // подменяем значения высоты и ширины у кнопки показа всех модификаторов
    Object.defineProperty(showingButtonEl, 'clientHeight', {
      value: 50,
    });
    Object.defineProperty(showingButtonEl, 'clientWidth', {
      value: 50,
    });

    // подменяем значения у дочерних элементов (модификаторов) контейнера
    [...containerEl.children].forEach((child, index) => {
      Object.defineProperty(child, 'clientHeight', {
        value: 50,
      });
      Object.defineProperty(child, 'clientWidth', {
        value: 50,
      });

      /*
       * после 5 элемента подменяем у всех элементов offsetTop так,
       * чтобы компоненту ModifiersGroup казалось что он не влез и перенесся
       */
      if (index >= 5) {
        Object.defineProperty(child, 'offsetTop', {
          value: 220,
          configurable: true,
        });
      }
    });

    /*
     * Проверяем ситуацию когда один элемент не влез в высоту контейнера
     * и кнопке НЕ ХВАТИЛО место после последнего влезшего
     */

    // сбрасываем состояние так чтобы метод прошел все условия внутри
    wrapper.instance().resetVisibleNodesData();
    wrapper.update();

    // вызываем метод
    wrapper.instance().checkVisibleNodes();
    wrapper.update();

    expect(wrapper.state()).toMatchObject({
      hasHiddenNodes: true,
      lastVisibleChildIndex: 4,
    });

    /*
     * Проверяем ситуацию когда один элемент не влез в высоту контейнера
     * и кнопке ХВАТИЛО место после последнего влезшего
     */
    jest.spyOn(containerEl, 'getBoundingClientRect').mockImplementation(() => ({ right: 200 }));
    jest.spyOn(containerEl.children[4], 'getBoundingClientRect').mockImplementation(() => ({ right: 100 }));

    // сбрасываем состояние так чтобы метод прошел все условия внутри
    wrapper.instance().resetVisibleNodesData();
    wrapper.update();

    // вызываем метод
    wrapper.instance().checkVisibleNodes();
    wrapper.update();

    expect(wrapper.state()).toMatchObject({
      hasHiddenNodes: true,
      lastVisibleChildIndex: 4,
    });

    /*
     * Проверяем ситуацию когда все элементы модификаторов ВЛЕЗЛИ в высоту контейнера
     */
    Object.defineProperty(containerEl.children[5], 'offsetTop', {
      value: containerEl.offsetTop,
    });

    // сбрасываем состояние так чтобы метод прошел все условия внутри
    wrapper.instance().resetVisibleNodesData();
    wrapper.update();

    // вызываем метод
    wrapper.instance().checkVisibleNodes();
    wrapper.update();

    expect(wrapper.state()).toMatchObject({
      hasHiddenNodes: true,
      lastVisibleChildIndex: 4,
    });
  });
  it('checkVisibleNodes() set state hasHiddenNodes to false', () => {
    const wrapper = mount(
      <PureModifiersGroup
        items={getTestItems()}
      />
    );

    const containerEl = wrapper.instance().containerRef.current;
    const showingButtonEl = wrapper.instance().showingButtonRef.current;

    Object.defineProperty(containerEl, 'clientHeight', {
      value: 200,
    });
    Object.defineProperty(containerEl, 'offsetTop', {
      value: 10,
    });

    Object.defineProperty(showingButtonEl, 'clientHeight', {
      value: 50,
    });
    Object.defineProperty(showingButtonEl, 'clientWidth', {
      value: 50,
    });

    [...containerEl.children].forEach((child, index) => {
      Object.defineProperty(child, 'clientHeight', {
        value: 50,
      });
      Object.defineProperty(child, 'clientWidth', {
        value: 50,
      });

      if (index >= 5) {
        Object.defineProperty(child, 'offsetTop', {
          value: 1,
          configurable: true,
        });
      }
    });

    wrapper.instance().resetVisibleNodesData();
    wrapper.update();

    wrapper.instance().checkVisibleNodes();
    wrapper.update();

    expect(wrapper.state()).toMatchObject({
      hasHiddenNodes: false,
      lastVisibleChildIndex: null,
    });
  });
  it('checkVisibleNodes(), expect isShowingButtonFit return 1', () => {
    const wrapper = mount(
      <PureModifiersGroup
        items={getTestItems()}
      />
    );
    const containerEl = wrapper.instance().containerRef.current;
    const showingButtonEl = wrapper.instance().showingButtonRef.current;

    // подменяем значения высоты и отступа сверху у контейнера
    Object.defineProperty(containerEl, 'clientHeight', {
      value: 200,
    });
    Object.defineProperty(containerEl, 'offsetTop', {
      value: 10,
    });

    // подменяем значения высоты и ширины у кнопки показа всех модификаторов
    Object.defineProperty(showingButtonEl, 'clientHeight', {
      value: 50,
    });
    Object.defineProperty(showingButtonEl, 'clientWidth', {
      value: 50,
    });

    // подменяем значения у дочерних элементов (модификаторов) контейнера
    [...containerEl.children].forEach((child, index) => {
      Object.defineProperty(child, 'clientHeight', {
        value: 50,
      });
      Object.defineProperty(child, 'clientWidth', {
        value: 50,
      });

      jest.spyOn(containerEl, 'getBoundingClientRect').mockImplementation(() => ({ right: 200 }));
      jest.spyOn(containerEl.children[4], 'getBoundingClientRect').mockImplementation(() => ({ right: 100 }));

      /*
       * после 5 элемента подменяем у всех элементов offsetTop так,
       * чтобы компоненту ModifiersGroup казалось что он не влез и перенесся
       */
      if (index >= 5) {
        Object.defineProperty(child, 'offsetTop', {
          value: 220,
          configurable: true,
        });
      }
    });

    /*
     * Проверяем ситуацию когда один элемент не влез в высоту контейнера
     * и кнопке НЕ ХВАТИЛО место после последнего влезшего
     */

    // сбрасываем состояние так чтобы метод прошел все условия внутри
    wrapper.instance().resetVisibleNodesData();
    wrapper.update();

    // вызываем метод
    wrapper.instance().checkVisibleNodes();
    wrapper.update();

    expect(wrapper.state()).toMatchObject({
      hasHiddenNodes: true,
      lastVisibleChildIndex: 5,
    });

    // сбрасываем состояние так чтобы метод прошел все условия внутри
    wrapper.instance().resetVisibleNodesData();
    wrapper.update();

    // вызываем метод
    wrapper.instance().checkVisibleNodes();
    wrapper.update();

    expect(wrapper.state()).toMatchObject({
      hasHiddenNodes: true,
      lastVisibleChildIndex: 5,
    });

    /*
     * Проверяем ситуацию когда все элементы модификаторов ВЛЕЗЛИ в высоту контейнера
     */
    Object.defineProperty(containerEl.children[5], 'offsetTop', {
      value: containerEl.offsetTop,
    });

    // сбрасываем состояние так чтобы метод прошел все условия внутри
    wrapper.instance().resetVisibleNodesData();
    wrapper.update();

    // вызываем метод
    wrapper.instance().checkVisibleNodes();
    wrapper.update();

    expect(wrapper.state()).toMatchObject({
      hasHiddenNodes: true,
      lastVisibleChildIndex: 5,
    });
  });
  it('showing button click should update state properly', () => {
    const wrapper = mount(
      <PureModifiersGroup
        items={getTestItems()}
      />
    );
    expect(wrapper.find(ModifierButton)).toHaveLength(6);
    expect(wrapper.find(ModifierButton).last().prop('className')).toContain(classes['show-all-button']);
    wrapper.find(ModifierButton).last().simulate('click');
    expect(wrapper.state()).toMatchObject({
      needShowAll: true,
    });
  });
  it('should handle "onSelectItem" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <PureModifiersGroup
        onSelectItem={spy}
        items={getTestItems()}
      />
    );
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(ModifierButton).first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ content: 'Test 1' });
  });
  it('should handle "getItemType" prop', () => {
    const spy = jest.fn(() => 'test-type');
    const testItems = getTestItems();
    const wrapper = mount(
      <ModifiersGroup
        getItemType={spy}
        items={getTestItems()}
      />
    );
    testItems.forEach((item, index) => {
      expect(wrapper.find(ModifierButton).at(index).prop('type')).toBe('test-type');
    });
  });
  it('should handle "getItemCount" prop', () => {
    const spy = jest.fn(() => 'test-count');
    const testItems = getTestItems();
    const wrapper = mount(
      <ModifiersGroup
        getItemCount={spy}
        items={getTestItems()}
      />
    );
    testItems.forEach((item, index) => {
      expect(wrapper.find(ModifierButton).at(index).prop('count')).toBe('test-count');
    });
  });
  it('should handle "getItemColor" prop', () => {
    const spy = jest.fn(() => 'test-color');
    const testItems = getTestItems();
    const wrapper = mount(
      <ModifiersGroup
        getItemColor={spy}
        items={getTestItems()}
      />
    );
    testItems.forEach((item, index) => {
      expect(wrapper.find(ModifierButton).at(index).prop('color')).toBe('test-color');
    });
  });
  it('should handle "isSelectedItem" prop', () => {
    const spy = jest.fn(() => 'test-selected');
    const testItems = getTestItems();
    const wrapper = mount(
      <ModifiersGroup
        isSelectedItem={spy}
        items={getTestItems()}
      />
    );
    testItems.forEach((item, index) => {
      expect(wrapper.find(ModifierButton).at(index).prop('selected')).toBe('test-selected');
    });
  });
  it('should handle "isMarkdown" prop', () => {
    const spy = jest.fn(() => 'testMarkdown');
    const testItems = getTestItems();
    const wrapper = mount(
      <ModifiersGroup
        items={getTestItems()}
        isMarkdown={spy}
      />
    );
    testItems.forEach((item, index) => {
      expect(wrapper.find(ModifierButton).at(index).prop('isMarkdown')).toBe('testMarkdown');
    });
  });
  it('should handle "getSelectItem" prop', () => {
    const spy = jest.fn();
    const onSelectItem = jest.fn();
    const testItems = getTestItems();
    mount(
      <ModifiersGroup
        items={getTestItems()}
        onSelectItem={onSelectItem}
        getSelectItem={spy}
      />
    );
    testItems.forEach((item, index) => {
      expect(spy).toHaveBeenNthCalledWith(index + 1, onSelectItem, item);
    });
  });
  it('should match snapshot', () => {
    const testItems = getTestItems().map((item, index) => ({
      ...item,
      chosen: index === 2,
      bgColor: index === 2 ? '#f00' : undefined,
      text: index > 2 ? 'test text' : undefined,
      image: index < 2 ? 'www.test-image.com' : undefined,
      amount: index,
    }));
    const wrapper = shallow(
      <ModifiersGroup
        items={testItems}
        getItemType={item => item.image ? 'image' : 'text'}
        getItemContent={item => item.text || item.image}
        getItemImage={prop('image')}
        getItemCount={prop('amount')}
        getItemColor={prop('bgColor')}
        isSelectedItem={prop('chosen')}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should show all modifiers, if pass prop needShowAll', () => {
    const component = mount(
      <PureModifiersGroup
        items={getTestItems()}
        needShowAll
      />
    );
    component.setState({ lastVisibleChildIndex: 3 });
    expect(component.find(ModifierButton).filter('.show-all-button')).toHaveLength(0);
    expect(component.find(ModifierButton).children().filter('.not-display')).toHaveLength(0);
  });
  it('should call onClickShowAll if it is a function', function () {
    const spy = jest.fn();
    const component = shallow(
      <PureModifiersGroup
        items={getTestItems()}
        onClickShowAll={spy}
      />
    );
    component.setState({ lastVisibleChildIndex: 3 });
    expect(spy).not.toBeCalled();
    component.find(ModifierButton).last().simulate('click');
    expect(spy).toBeCalledTimes(1);
  });
});

describe('defaultOnSelectItem()', () => {
  it('should return function', () => {
    const onSelectItem = jest.fn();
    const item = { selected: false };
    const onClick = defaultOnSelectItem(onSelectItem, item);

    expect(isFunction(onClick)).toBe(true);

    onClick();
    expect(onSelectItem).toBeCalledWith(item);
  });
});

describe('createHiddenNodeIndexFinder()', () => {
  it('should return false', () => {
    const find = createHiddenNodeIndexFinder({
      offsetTop: 0,
      clientHeight: 100,
    });
    const node = {
      offsetTop: 0,
      classList: { contains: () => false },
    };
    const nodeInvisible = {
      ...node,
      classList: { contains: () => true },
    };

    expect(find(node)).toBe(false);
    expect(find(nodeInvisible)).toBe(false);
  });

  it('should return true', () => {
    const find = createHiddenNodeIndexFinder({
      offsetTop: 0,
      clientHeight: 100,
    });
    const node = {
      offsetTop: 120,
      classList: { contains: () => false },
    };
    const nodeInvisible = {
      ...node,
      classList: { contains: () => true },
    };

    expect(find(node)).toBe(true);
    expect(find(nodeInvisible)).toBe(true);
  });
});
