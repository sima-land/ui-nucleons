import { createEvent, fireEvent, render } from '@testing-library/react';
import { DragEvent } from 'react';
import { useFilesDrop, getFilesDescription } from '../utils';

describe('useFilesDrop', () => {
  function TestComponent({ onDrop }: { onDrop: (event: DragEvent<HTMLDivElement>) => void }) {
    const { active, bind } = useFilesDrop(onDrop);

    return (
      <>
        <div {...bind} data-testid='main' data-active={String(active)}>
          Main
          <div data-testid='child'>Child</div>
        </div>

        <div data-testid='other'>Other</div>
      </>
    );
  }

  it('should handle drag events', () => {
    const spy = jest.fn();
    const { getByTestId } = render(<TestComponent onDrop={spy} />);
    const element = getByTestId('main');
    expect(element.getAttribute('data-active')).toBe('false');

    fireEvent.dragEnter(element);
    expect(element.getAttribute('data-active')).toBe('true');

    fireEvent.dragLeave(element, { relatedTarget: null });
    expect(element.getAttribute('data-active')).toBe('false');

    fireEvent.dragOver(element);
    expect(element.getAttribute('data-active')).toBe('true');

    fireEvent.drop(element);
    expect(element.getAttribute('data-active')).toBe('false');

    fireEvent.dragEnter(element);
    expect(element.getAttribute('data-active')).toBe('true');
  });

  it('should handle dragLeave when relatedTarget is other element', () => {
    const spy = jest.fn();
    const { getByTestId } = render(<TestComponent onDrop={spy} />);
    const element = getByTestId('main');
    const other = getByTestId('other');

    expect(element.getAttribute('data-active')).toBe('false');

    fireEvent.dragEnter(element);
    expect(element.getAttribute('data-active')).toBe('true');

    const event = createEvent.dragLeave(element);
    Object.defineProperty(event, 'relatedTarget', {
      value: other,
    });

    expect(element.getAttribute('data-active')).toBe('true');
    fireEvent(element, event);
    expect(element.getAttribute('data-active')).toBe('false');
  });

  it('should handle dragLeave when relatedTarget is child element', () => {
    const spy = jest.fn();
    const { getByTestId } = render(<TestComponent onDrop={spy} />);
    const element = getByTestId('main');
    const child = getByTestId('child');

    expect(element.getAttribute('data-active')).toBe('false');

    fireEvent.dragEnter(element);
    expect(element.getAttribute('data-active')).toBe('true');

    const event = createEvent.dragLeave(element);
    Object.defineProperty(event, 'relatedTarget', {
      value: child,
    });

    expect(element.getAttribute('data-active')).toBe('true');
    fireEvent(element, event);
    expect(element.getAttribute('data-active')).toBe('true');
  });
});

describe('getFilesDescription', () => {
  it('should handle "countLimit" prop', () => {
    expect(getFilesDescription({ countLimit: 1 })).toBe('1 файл');
  });

  it('should handle "formats" prop', () => {
    expect(getFilesDescription({ formats: 'JPG, GIF' })).toBe('формат JPG, GIF');
    expect(getFilesDescription({ formats: 'JPG, GIF', countLimit: 20 })).toBe(
      '20 файлов, формат JPG, GIF',
    );
  });

  it('should handle "sizeLimit" prop', () => {
    expect(getFilesDescription({ sizeLimit: '24 Килобайт' })).toBe('до 24 Килобайт');
    expect(getFilesDescription({ formats: 'JPG, GIF', sizeLimit: '500 Kb' })).toBe(
      'формат JPG, GIF, до 500 Kb',
    );
  });
});
