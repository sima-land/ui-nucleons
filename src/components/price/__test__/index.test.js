import React from 'react';
import Price from '../';
import { shallow } from 'enzyme';

let price;

describe('<Price />', () => {
  let props = {
    value: 100.578,
    currencySign: 'RUB',
    beforePrice: true,
    withFractionalPart: true,
  };

  it('renders correctly', () => {
    price = shallow(<Price {...props} />);
    expect(price).toMatchSnapshot();
    props = { value: 100, currencySign: 'USD' };
    price = shallow(<Price {...props} />);
    expect(price).toMatchSnapshot();
    props = { value: 100, currencySign: 'USD', withFractionalPart: true, boldIntegerPart: true, fractionalAtTop: true };
    price = shallow(<Price {...props} />);
    expect(price).toMatchSnapshot();
    props = { value: 100, className: 'test', currencySign: 'RUB' };
    price = shallow(<Price {...props} />);
    expect(price.prop('className')).toEqual('price test');
  });

  it('has class "sign" only when current currency is rubles', () => {
    props = {
      value: 100.578,
      currencySign: 'RUB',
      beforePrice: true,
      withFractionalPart: true,
    };
    price = shallow(<Price {...props} />);
    expect(price.find('span').first().children().first().hasClass('sign')).toBeTruthy();
    price.setProps({ currencySign: 'USD' });
    expect(price.find('span').first().children().first().hasClass('sign')).toBeFalsy();
  });
});
