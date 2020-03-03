import React from 'react';
import { shallow } from 'enzyme';
import Badge, { renderField } from '../index';
import { badges } from '../__stories__/items';
import { Timer } from '../../timer';

describe('<Badge />', () => {
  describe('without props', () => {
    const badge = shallow(<Badge />);

    it('renders correctly', () => {
      expect(badge).toMatchSnapshot();
    });
  });

  describe('with textColor', function () {
    const badge = shallow(<Badge textColor='red' />);

    it('renders correctly', () => {
      expect(badge).toMatchSnapshot();
    });

    it('contains textColor', () => {
      expect(badge.find('.container').prop('style').color).toEqual('red');
    });
  });

  describe('with bgColor', function () {
    const badge = shallow(<Badge bgColor='blue' />);

    it('renders correctly', () => {
      expect(badge).toMatchSnapshot();
    });

    it('contains bgColor', () => {
      expect(badge.find('.container').prop('style').backgroundColor).toEqual('blue');
    });
  });

  describe('with strokeColor', function () {
    const badge = shallow(<Badge strokeColor='green' />);

    it('renders correctly', () => {
      expect(badge).toMatchSnapshot();
    });

    it('contains strokeColor', () => {
      expect(badge.find('.container').prop('style').fill).toEqual('green');
    });
  });

  describe('with title', function () {
    const badge = shallow(<Badge title='Test' />);

    it('renders correctly', () => {
      expect(badge).toMatchSnapshot();
    });

    it('contains title', () => {
      expect(badge.prop('title')).toEqual('Test');
    });
  });

  describe('with link', function () {
    const badge = shallow(<Badge link='/test' />);

    it('renders correctly', () => {
      expect(badge).toMatchSnapshot();
    });

    it('contains href', () => {
      expect(badge.find('a').prop('href')).toEqual('/test');
    });
  });

  describe('with icon', () => {
    it('should pass className when badge is only icon', () => {
      const badge = shallow(<Badge />);
      expect(badge.find('.container.container-icon')).toHaveLength(0);
      badge.setProps({
        isIconOnly: true,
      });
      expect(badge.find('.container.container-icon')).toHaveLength(1);
    });
    it('should pass only container styles when badge is only icon', () => {
      const badge = shallow(
        <Badge
          textColor='red'
          bgColor='green'
          strokeColor='blue'
          containerProps={{
            style: {
              margin: '10px',
            },
          }}
        />
      );
      expect(badge.find('.container').at(0).prop('style')).toEqual({
        margin: '10px',
        color: 'red',
        backgroundColor: 'green',
        fill: 'blue',
      });
      badge.setProps({
        isIconOnly: true,
      });
      expect(badge.find('.container').at(0).prop('style')).toEqual({
        margin: '10px',
      });
    });
  });

  describe('with containerProps', function () {
    it('renders correctly', () => {
      const badge = shallow(
        <Badge containerProps={{
          className: 'testClassName',
          style: {
            margin: 10,
          },
        }}
        />
      );
      expect(badge).toMatchSnapshot();
    });

    it('should pass className prop', () => {
      const badge = shallow(
        <Badge containerProps={{
          className: 'testClassName',
        }}
        />
      );
      expect(badge.find('.container.testClassName')).toHaveLength(1);
    });
    it('should pass style prop without icon', () => {
      const badge = shallow(
        <Badge containerProps={{
          style: {
            margin: 10,
          },
        }}
        />
      );
      expect(badge.find('.container').prop('style')).toEqual({
        backgroundColor: '#000',
        color: '#fff',
        fill: '#fff',
        margin: 10,
      });
    });
    it('should pass style prop with icon', () => {
      const badge = shallow(
        <Badge
          fields={['icon']}
          isIconOnly
          textColor='red'
          bgColor='white'
          containerProps={{ style: { margin: 10 } }}
        />
      );
      expect(badge.find('.container').prop('style')).toEqual({
        margin: 10,
      });
    });
  });
});

describe('renderField', () => {
  const testBadge = badges[1];
  it('should resolve icon properly', () => {
    const field = renderField(testBadge.fields[0]);
    expect(field.type).toBe('img');
    expect(field.props).toEqual({
      src: testBadge.fields[0].value,
    });
  });
  it('should resolve timer properly', () => {
    const field = renderField(testBadge.fields[2]);
    expect(field.type).toBe(Timer);
    expect(field.props).toEqual({
      endTime: testBadge.fields[2].value,
      format: testBadge.fields[2].format,
    });
  });
  it('should resolve text properly', () => {
    const field = renderField(testBadge.fields[1]);
    expect(field.type).toBe('span');
    expect(field.props).toEqual({
      children: testBadge.fields[1].value,
    });
  });
  it('should resolve default case', () => {
    const field = renderField({
      value: 'some text',
    });
    expect(field.type).toBe('span');
    expect(field.props).toEqual({
      children: 'some text',
    });
  });
});
