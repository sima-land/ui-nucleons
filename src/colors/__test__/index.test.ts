import { COLORS } from '..';

describe('COLORS', () => {
  it('should has every color', () => {
    expect(COLORS.get('basic-blue')).toBe('#1f84db');
    expect(COLORS.get('basic-gray87')).toBe('#212121');
    expect(COLORS.get('basic-gray76')).toBe('#3a3a3b');
    expect(COLORS.get('basic-gray66')).toBe('#545455');
    expect(COLORS.get('basic-gray54')).toBe('#757575');
    expect(COLORS.get('basic-gray38')).toBe('#9e9e9e');
    expect(COLORS.get('basic-gray24')).toBe('#c2c2c2');
    expect(COLORS.get('basic-gray12')).toBe('#e0e0e0');
    expect(COLORS.get('basic-gray8')).toBe('#ebebeb');
    expect(COLORS.get('basic-gray4')).toBe('#f5f5f5');
    expect(COLORS.get('basic-gray2')).toBe('#fafafa');
    expect(COLORS.get('basic-white')).toBe('#fff');

    expect(COLORS.get('additional-deep-red')).toBe('#d50000');
    expect(COLORS.get('additional-red')).toBe('#fb3a2f');
    expect(COLORS.get('additional-light-red')).toBe('#feebea');
    expect(COLORS.get('additional-dark-teal')).toBe('#089176');
    expect(COLORS.get('additional-teal')).toBe('#09ab8b');
    expect(COLORS.get('additional-green')).toBe('#00c853');
    expect(COLORS.get('additional-light-green')).toBe('#64dd17');
    expect(COLORS.get('additional-lime')).toBe('#aeea00');
    expect(COLORS.get('additional-faded-green')).toBe('#eff9ea');
    expect(COLORS.get('additional-pink')).toBe('#e82e5c');
    expect(COLORS.get('additional-purple')).toBe('#b52ea8');
    expect(COLORS.get('additional-violet')).toBe('#902bd0');
    expect(COLORS.get('additional-deep-purple')).toBe('#634bdf');
    expect(COLORS.get('additional-electric-blue')).toBe('#2962ff');
    expect(COLORS.get('additional-light-blue')).toBe('#0091ea');
    expect(COLORS.get('additional-cyan')).toBe('#00b8d4');
    expect(COLORS.get('additional-sky')).toBe('#e4f1f9');
    expect(COLORS.get('additional-deep-orange')).toBe('#ff7200');
    expect(COLORS.get('additional-amber')).toBe('#ffab00');
    expect(COLORS.get('additional-yellow')).toBe('#ffd600');
    expect(COLORS.get('additional-gold')).toBe('#d5a43b');
    expect(COLORS.get('additional-brown')).toBe('#795548');
    expect(COLORS.get('additional-blue-gray')).toBe('#607d8b');
    expect(COLORS.get('additional-deep-blue')).toBe('#00599d');
    expect(COLORS.get('additional-dark-blue')).toBe('#002b41');
    expect(COLORS.get('additional-unlit-blue')).toBe('#1b75c2');
  });
});
