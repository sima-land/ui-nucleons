import { getStartValue, prepareValue, validateCursorPosition, processChange } from '../helpers';

describe('getStartValue()', () => {
  it('without params', () => {
    expect(getStartValue({ value: '', mask: '' })).toEqual('');
  });
  it('with alwaysShowMask', () => {
    expect(getStartValue({
      alwaysShowMask: true,
      mask: '',
      value: '',
    })).toEqual('');
  });
  it('with empty mask and value does not match pattern', () => {
    expect(getStartValue({
      alwaysShowMask: true,
      pattern: /[0-9]/g,
      mask: '',
      value: 'test',
    })).toEqual('');
  });
  it('with empty mask and pattern', () => {
    expect(getStartValue({
      alwaysShowMask: true,
      pattern: /[0-9]/g,
      mask: '',
      value: '56test',
    })).toEqual('56');
  });
  it('with alwaysShowMask and mask', () => {
    expect(getStartValue({
      alwaysShowMask: true,
      pattern: /[0-9]/g,
      value: '',
      maskSign: '*',
      mask: '**-**-****',
    })).toEqual('**-**-****');
  });
  it('with value and mask', () => {
    expect(getStartValue({
      value: '125',
      pattern: /[0-9]/g,
      maskSign: '*',
      mask: '**-**-****',
    })).toEqual('12-5*-****');
  });
});

describe('prepareValue()', () => {
  it('with empty mask and value', () => {
    expect(prepareValue({ mask: '', value: '' })).toEqual('');
  });
  it('with value and empty mask', () => {
    expect(prepareValue({ value: '1544', mask: '', pattern: /[0-9]/g })).toEqual('1544');
  });
  it('with mask and empty value ', () => {
    expect(prepareValue({ value: '', mask: '+9 ***', maskSign: '*' }))
      .toEqual('+9 ***');
  });
});

describe('validateCursorPosition()', () => {
  it('with empty mask and value', () => {
    expect(validateCursorPosition({ mask: '', value: '' })).toEqual(0);
  });
  it('if position more first value caret', () => {
    expect(validateCursorPosition({
      position: 10,
      maskSign: '_',
      value: '+7 555 _________',
      mask: '',
    })).toEqual(7);
  });
  it('if position less first mask caret', () => {
    expect(validateCursorPosition({
      position: 1,
      maskSign: '_',
      mask: '+7 __ ____',
      value: '',
    })).toEqual(3);
  });
});

describe('processChange()', () => {
  it('with empty mask', () => {
    expect(processChange({ mask: '' }))
      .toEqual({ correctValue: '', correctSelection: 0 });
  });
  it('if added', () => {
    expect(processChange({
      input: { value: '+7 555 258', selectionStart: 5 },
      mask: '+7 *** **',
      maskSign: '*',
      lastSelection: 4,
      pattern: /[0-9]/g,
    })).toEqual({ correctValue: '+7 555 25', correctSelection: 5 });
  });
  it('if remove before position', () => {
    expect(processChange({
      input: { value: '+7 12345', selectionStart: 6 },
      mask: '+7 *** **',
      maskSign: '*',
      lastSelection: 7,
      pattern: /[0-9]/g,
    })).toEqual({ correctValue: '+7 124 5*', correctSelection: 5 });
  });
  it('if remove after position', () => {
    expect(processChange({
      input: { value: '+7 12345', selectionStart: 6 },
      mask: '+7 *** **',
      maskSign: '*',
      lastSelection: 6,
      pattern: /[0-9]/g,
    })).toEqual({ correctValue: '+7 123 5*', correctSelection: 7 });
  });
});
