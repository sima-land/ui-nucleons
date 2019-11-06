import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Input from '../index';
import classes from '../fields.scss';

describe('<Input />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Input />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "type" prop', () => {
    const validTypes = [
      'text',
      'email',
      'number',
      'password',
    ];
    const invalidTypes = [
      null,
      undefined,
      false,
      true,
      {},
      'checkbox',
      'range',
    ];

    validTypes.forEach(validType => {
      const wrapper = mount(
        <Input type={validType} />
      );
      expect(wrapper.find('input').prop('type')).toBe(validType);
    });
    invalidTypes.forEach(invalidType => {
      const wrapper = mount(
        <Input type={invalidType} />
      );
      expect(wrapper.find('input').prop('type')).toBe('text');
    });
  });
  it('should handle "failed" prop', () => {
    const wrapper = mount(
      <Input
        failed
      />
    );

    expect(wrapper.find(`.${classes['input-wrapper']}`).prop('className')).toContain(classes.failed);
    wrapper.setProps({ failed: false });
    expect(wrapper.find(`.${classes['input-wrapper']}`).prop('className')).not.toContain(classes.failed);
  });
  it('should handle "onFocus" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Input
        onFocus={spy}
      />
    );

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('input').simulate('focus');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should handle "onBlur" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Input
        onBlur={spy}
      />
    );

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should handle "startAdornment" prop', () => {
    const wrapper = mount(
      <Input
        startAdornment={(
          <span className='test-start-adornment' />
        )}
      />
    );

    expect(
      wrapper
        .find(`.${classes['adornment-container']}`)
        .filter(`.${classes.start}`)
        .find('.test-start-adornment')
    ).toHaveLength(1);

    wrapper.setProps({ startAdornment: null });
    expect(
      wrapper
        .find(`.${classes['adornment-container']}`)
        .filter(`.${classes.start}`)
    ).toHaveLength(0);
  });
  it('should handle "endAdornment" prop', () => {
    const wrapper = mount(
      <Input
        endAdornment={(
          <span className='test-end-adornment' />
        )}
      />
    );

    expect(
      wrapper
        .find(`.${classes['adornment-container']}`)
        .filter(`.${classes.end}`)
        .find('.test-end-adornment')
    ).toHaveLength(1);

    wrapper.setProps({ endAdornment: null });
    expect(
      wrapper
        .find(`.${classes['adornment-container']}`)
        .filter(`.${classes.end}`)
    ).toHaveLength(0);
  });
  it('should focus in input on wrapper click', () => {
    const spy = jest.fn();
    const container = document.createElement('div');
    document.body.append(container);

    act(() => {
      render(
        <Input onFocus={spy} />,
        container
      );
    });

    expect(spy).toHaveBeenCalledTimes(0);
    container.querySelector(`span.${classes['input-wrapper']}`).click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should match snapshot', () => {
    const wrapper = mount(
      <Input
        value='Test text'
        placeholder='Test placeholder'
        onChange={() => {}}
        onFocus={() => {}}
        onBlur={() => {}}
        startAdornment={(<span>Test start adornment</span>)}
        endAdornment={(<span>Test end adornment</span>)}
        name='test-name'
        id='test-id'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
