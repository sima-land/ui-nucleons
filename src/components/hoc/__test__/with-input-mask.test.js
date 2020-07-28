import withInputMask, {
  clearValue,
  getCaretPosition,
  getLastInsert,
  getNewMaskedObject,
  getNextEditablePosition,
  getPreviousEditablePosition,
  isEditablePosition,
  isFilledField,
  getMaskedValue,
  setSelection,
} from '../with-input-mask';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Input from '../../input';
import { shallow } from 'enzyme';
import TestUtils, { act } from 'react-dom/test-utils';

const validator = {
  pattern: /[0-9_]/g,
  mask: '+_ (___) ___-__-__',
};

describe('getNewMaskedValue', () => {
  it('should works properly when not filled inserting', () => {
    const maskedValue = '+7 (___) ___-00-__';
    expect(getNewMaskedObject(
      '+79 (___) ___-00-__',
      maskedValue,
      validator,
      { actual: 4, prev: 3 },
    )).toStrictEqual({
      maskedValue: '+7 (9__) ___-_0-0_',
      newCaretPosition: 4,
    });
    expect(getNewMaskedObject(
      '9+7 (___) ___-00-__',
      maskedValue,
      validator,
      { actual: 1, prev: 0 }
    )).toStrictEqual({
      maskedValue: '+9 (7__) ___-_0-0_',
      newCaretPosition: 4,
    });
    expect(getNewMaskedObject(
      '+7 (912___) ___-00-__',
      maskedValue,
      validator,
      { actual: 7, prev: 4 }
    )).toStrictEqual({
      maskedValue: '+7 (912) ___-__-_0',
      newCaretPosition: 9,
    });
  });
  it('should works properly when filled inserting', () => {
    const maskedValue = '+7 (___) ___-__-00';
    expect(getNewMaskedObject(
      '+79 (___) ___-__-00',
      maskedValue,
      validator,
      { actual: 3, prev: 2 }
    )).toStrictEqual({
      maskedValue: '+7 (9__) ___-__-00',
      newCaretPosition: 5,
    });
    expect(getNewMaskedObject(
      '9+7 (___) ___-__-00',
      maskedValue,
      validator,
      { actual: 1, prev: 0 }
    )).toStrictEqual({
      maskedValue: '+9 (___) ___-__-00',
      newCaretPosition: 4,
    });
    expect(getNewMaskedObject(
      '+7 (912___) ___-__-00',
      maskedValue,
      validator,
      { actual: 7, prev: 4 }
    )).toStrictEqual({
      maskedValue: '+7 (912) ___-__-00',
      newCaretPosition: 9,
    });
    expect(getNewMaskedObject(
      '+7 (___) ___-__-11100',
      maskedValue,
      validator,
      { actual: 19, prev: 16 }
    )).toStrictEqual({
      maskedValue: '+7 (___) ___-__-11',
      newCaretPosition: 18,
    });
  });
  it('should works properly when during backspacing', () => {
    const maskedValue = '+7 (912) 123-__-__';
    expect(getNewMaskedObject(
      '+7 (91) ___-__-__',
      maskedValue,
      validator,
      { actual: 5, prev: 6 }
    )).toStrictEqual({
      maskedValue: '+7 (91_) ___-__-__',
      newCaretPosition: 5,
    });
    expect(getNewMaskedObject(
      '+7 (912) __-__-__',
      maskedValue,
      validator,
      { actual: 8, prev: 9 }
    )).toStrictEqual({
      maskedValue: '+7 (912) ___-__-__',
      newCaretPosition: 7,
    });
    expect(getNewMaskedObject(
      '+7 (912) ___-__-_',
      maskedValue,
      validator,
      { actual: 17, prev: 18 }
    )).toStrictEqual({
      maskedValue: '+7 (912) ___-__-__',
      newCaretPosition: 17,
    });
    expect(getNewMaskedObject(
      '+7 (__-__-_',
      maskedValue,
      validator,
      { actual: 3, prev: 9 }
    )).toStrictEqual({
      maskedValue: '+7 (___) ___-__-__',
      newCaretPosition: 2,
    });
  });
  it('should works properly when during deleting', () => {
    const maskedValue = '+7 (912) ___-__-__';
    expect(getNewMaskedObject(
      '7 (912) ___-__-__',
      maskedValue,
      validator,
      { actual: 0, prev: 0 }
    )).toStrictEqual({
      maskedValue: '+7 (912) ___-__-__',
      newCaretPosition: 1,
    });
    expect(getNewMaskedObject(
      '+ (912) ___-__-__',
      maskedValue,
      validator,
      { actual: 2, prev: 1 }
    )).toStrictEqual({
      maskedValue: '+9 (12_) ___-__-__',
      newCaretPosition: 1,
    });
  });
});

describe('makeMask', function () {
  it('should works correctly with danger value', () => {
    expect(getMaskedValue(null, validator)).toBe(validator.mask);
    expect(getMaskedValue(undefined, validator)).toBe(validator.mask);
    expect(getMaskedValue('', validator)).toBe(validator.mask);
    expect(getMaskedValue('abcde', validator)).toBe('+a (bcd) e__-__-__');
  });
  it('should works properly', () => {
    expect(getMaskedValue('123', validator)).toBe('+1 (23_) ___-__-__');
    expect(getMaskedValue('79121234567', validator)).toBe('+7 (912) 123-45-67');
    expect(getMaskedValue('7912___45__', validator)).toBe('+7 (912) ___-45-__');
    expect(getMaskedValue('', validator)).toBe('+_ (___) ___-__-__');
  });
  it('should works properly with start position', () => {
    expect(getMaskedValue('123', validator, 4)).toBe('+_ (123) ___-__-__');
    expect(getMaskedValue('123', validator, 2)).toBe('+_ (123) ___-__-__');
    expect(getMaskedValue('79121234567', validator, 6)).toBe('+_ (__7) 912-12-34');
  });
});

describe('getCaretPosition', () => {
  const e = {
    target: {
      selectionStart: 2,
    },
  };
  it('should return correct value', () => {
    expect(getCaretPosition(e)).toBe(2);
    expect(getCaretPosition({ target: null })).toBe(0);
    expect(getCaretPosition({})).toBe(0);
  });
});

describe('getLastInsert', () => {
  it('should works properly', () => {
    expect(getLastInsert('+123-567-90', 5, 0)).toBe('');
    expect(getLastInsert('+123-567-90', 5, 1)).toBe('5');
    expect(getLastInsert('+123-567-90', 0, 3)).toBe('+12');
    expect(getLastInsert('+123-567-90', -5, 3)).toBe('67-');
    expect(getLastInsert('+123', 6, 3)).toBe('');
  });
  it('should works properly without count argument', () => {
    expect(getLastInsert('+123-567-90', 5)).toBe('567-90');
    expect(getLastInsert('+123-567-90', 1)).toBe('123-567-90');
  });
});

describe('isFilledField', () => {
  it('should return false with correct mask and not full value', () => {
    expect(isFilledField('123-456-78', {
      mask: '___-___-___',
      pattern: /[0-9_]/g,
    })).toBeFalsy();
    expect(isFilledField('', {
      mask: '___-___-___-',
      pattern: /[0-9_]/g,
    })).toBeFalsy();
  });
  it('should return true with correct mask and full value', () => {
    expect(isFilledField('123-456-789', {
      mask: '___-___-___',
      pattern: /[0-9_]/g,
    })).toBeTruthy();
    expect(isFilledField('123-456-789', {
      mask: '___-___-___-',
      pattern: /[0-9_]/g,
    })).toBeTruthy();
  });
  it('should works properly with incorrect mask', () => {
    expect(isFilledField('123-456-78', {
      mask: '',
      pattern: /[0-9_]/g,
    })).toBeFalsy();
    expect(isFilledField('123-456-78', {
      pattern: /[0-9_]/g,
    })).toBeFalsy();
  });
});

describe('clearValue', () => {
  it('should works properly', () => {
    expect(clearValue('+7 (912)string 123 - 456-7', validator)).toBe('79121234567');
    expect(clearValue('789', validator)).toBe('789');
    expect(clearValue('', validator)).toBe('');
    expect(clearValue('abc', validator)).toBe('');
    expect(clearValue(null, validator)).toBe(null);
    expect(clearValue(undefined, validator)).toBe(undefined);
  });
});

describe('isEditablePosition', () => {
  it('should works properly', () => {
    expect(isEditablePosition(1, validator)).toBeTruthy();
    expect(isEditablePosition(5, validator)).toBeTruthy();
    expect(isEditablePosition(9, validator)).toBeTruthy();
    expect(isEditablePosition(10, validator)).toBeTruthy();

    expect(isEditablePosition(3, validator)).toBeFalsy();
    expect(isEditablePosition(0, validator)).toBeFalsy();
    expect(isEditablePosition(-1, validator)).toBeFalsy();
    expect(isEditablePosition(null, validator)).toBeFalsy();
    expect(isEditablePosition(undefined, validator)).toBeFalsy();
  });
});

describe('getNextEditablePosition', () => {
  it('should works properly', () => {
    expect(getNextEditablePosition(-10, validator)).toBe(1);
    expect(getNextEditablePosition(0, validator)).toBe(1);
    expect(getNextEditablePosition(1, validator)).toBe(1);
    expect(getNextEditablePosition(2, validator)).toBe(4);
    expect(getNextEditablePosition(3, validator)).toBe(4);
    expect(getNextEditablePosition(50, validator)).toBe(50);
    expect(getNextEditablePosition(18, validator)).toBe(18);
  });
});

describe('getPreviousEditablePosition', () => {
  it('should works properly', () => {
    expect(getPreviousEditablePosition(-10, validator)).toBe(-10);
    expect(getPreviousEditablePosition(0, validator)).toBe(1);
    expect(getPreviousEditablePosition(1, validator)).toBe(1);
    expect(getPreviousEditablePosition(3, validator)).toBe(2);
    expect(getPreviousEditablePosition(50, validator)).toBe(18);
    expect(getPreviousEditablePosition(18, validator)).toBe(18);
  });
});

describe('setSelection()', () => {
  const setSelectionRange = jest.fn();
  const inputRef = {
    current: {
      setSelectionRange,
    },
  };
  const valueRef = {
    current: '+7 (___) ___-__-__',
  };
  it('set correct selection without event', () => {
    const caret = {};
    setSelection(inputRef, valueRef, caret);
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(4, 4);
  });
  it('set correct selection with click position less than first caret position', () => {
    const caret = {};
    const event = { target: { selectionStart: 2 } };
    setSelection(inputRef, valueRef, caret, event);
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(2, 2);
  });
  it('set correct selection with click position more than first caret position', () => {
    const caret = {};
    const event = { target: { selectionStart: 10 } };
    setSelection(inputRef, valueRef, caret, event);
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(4, 4);
  });
});

describe('withInputMask', () => {
  const onKeyUp = jest.fn();
  const onClick = jest.fn();
  const onChange = jest.fn();
  const onMouseOut = jest.fn();
  const onFocus = jest.fn();
  it('should works properly without props', () => {
    const MaskedPhoneInput = withInputMask(Input);
    const wrapper = shallow(<MaskedPhoneInput />);
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(Input).prop('value')).toBe(undefined);
  });
  it('should call pure handlers', () => {
    const event = {
      target: {
        selectionStart: 0,
        value: '',
      },
    };
    const MaskedPhoneInput = withInputMask(Input);
    const wrapper = shallow(
      <MaskedPhoneInput
        onClick={onClick}
        onKeyUp={onKeyUp}
        onChange={onChange}
        onMouseOut={onMouseOut}
        onFocus={onFocus}
      />
    );
    const input = wrapper.find(Input).at(0);

    expect(onClick).not.toHaveBeenCalled();
    input.simulate('click', event);
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(onChange).not.toHaveBeenCalled();
    input.simulate('change', event);
    expect(onChange).toHaveBeenCalledTimes(1);

    expect(onKeyUp).not.toHaveBeenCalled();
    input.simulate('keyUp', event);
    expect(onKeyUp).toHaveBeenCalledTimes(1);

    expect(onMouseOut).not.toHaveBeenCalled();
    input.simulate('mouseOut', event);
    expect(onMouseOut).toHaveBeenCalledTimes(1);

    expect(onFocus).not.toHaveBeenCalled();
    input.simulate('focus', event);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});

describe('MaskedPhoneInput', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should works properly', () => {
    jest.useFakeTimers();

    const MaskedPhoneInput = withInputMask(Input, '+_ (___) ___-__-__');
    act(() => {
      render(<MaskedPhoneInput />, container);
    });
    const input = container.querySelector('input');
    expect(input.value).toBe('+_ (___) ___-__-__');
    act(() => {
      TestUtils.Simulate.change(input, {
        target: {
          selectionStart: 1,
          value: '7+_ (___) ___-__-__',
        },
      });
    });
    expect(input.value).toBe('+7 (___) ___-__-__');
    act(() => {
      TestUtils.Simulate.change(input, {
        target: {
          selectionStart: 5,
          value: '+7 (912___) ___-__-__',
        },
      });
    });
    expect(input.value).toBe('+7 (912) ___-__-__');

    act(() => {
      TestUtils.Simulate.click(input);
      TestUtils.Simulate.change(input, {
        target: {
          selectionStart: 5,
          value: '+7 9551581588',
        },
      });
    });
    expect(input.value).toBe('+7 (955) 158-15-88');

    act(() => {
      TestUtils.Simulate.focus(input);
      jest.runAllTimers();
    });
  });
});
