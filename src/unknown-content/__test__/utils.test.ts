import { setTableRowLabels } from '../utils';

describe('setTableRowLabels', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container?.remove();
  });

  it('should works with properly table', () => {
    container.innerHTML = `
      <table>
        <thead>
          <tr>
            <td>Заголовок 1</td>
            <td>Заголовок 2</td>
            <td>Заголовок 3</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Значение А1</td>
            <td>Значение А2</td>
            <td>Значение А3</td>
          </tr>
          <tr>
            <td>Значение B1</td>
            <td>Значение B2</td>
            <td>Значение B3</td>
          </tr>
        </tbody>
      </table>
    `;

    container.querySelectorAll('td').forEach(td => {
      expect(td.hasAttribute('data-table-column-title')).toBe(false);
    });

    setTableRowLabels(container);

    container.querySelectorAll('thead td').forEach(td => {
      expect(td.hasAttribute('data-table-column-title')).toBe(false);
    });
    container.querySelectorAll('tbody td').forEach(td => {
      expect(td.hasAttribute('data-table-column-title')).toBe(true);
    });

    expect(container.innerHTML).toMatchSnapshot();
  });

  it('should works with empty td in thead', () => {
    container.innerHTML = `
      <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Значение B1</td>
            <td>Значение B2</td>
            <td>Значение B3</td>
          </tr>
        </tbody>
      </table>
    `;

    setTableRowLabels(container);

    container.querySelectorAll('tbody td').forEach(td => {
      expect(td.getAttribute('data-table-column-title')).toBe('');
    });
  });

  it('should works without thead in table', () => {
    container.innerHTML = `
      <table>
        <tbody>
          <tr>
            <td>Значение А1</td>
            <td>Значение А2</td>
            <td>Значение А3</td>
          </tr>
          <tr>
            <td>Значение B1</td>
            <td>Значение B2</td>
            <td>Значение B3</td>
          </tr>
        </tbody>
      </table>
    `;

    setTableRowLabels(container);

    container.querySelectorAll('tbody td').forEach(td => {
      expect(td.getAttribute('data-table-column-title')).toBe('');
    });
  });

  it('should works with tbody without table', () => {
    container.innerHTML = `
      <tbody>
        <tr>
          <td>Значение А1</td>
          <td>Значение А2</td>
          <td>Значение А3</td>
        </tr>
        <tr>
          <td>Значение B1</td>
          <td>Значение B2</td>
          <td>Значение B3</td>
        </tr>
      </tbody>
    `;

    setTableRowLabels(container);

    container.querySelectorAll('tbody td').forEach(td => {
      expect(td.getAttribute('data-table-column-title')).toBe('');
    });
  });
});
