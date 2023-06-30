import { createEvent, fireEvent, render } from '@testing-library/react';
import { UploadArea } from '../upload-area';

describe('UploadArea', () => {
  it('should renders correctly without props', () => {
    const { container, getByTestId } = render(<UploadArea />);

    expect(container.textContent).toContain('Загрузите файл');
    expect(container.textContent).toContain('1 файл');
    expect((getByTestId('upload-area:input') as HTMLInputElement).multiple).toBe(false);
  });

  it('should renders multiple file input without other props', () => {
    const { container, getByTestId } = render(<UploadArea multiple />);

    expect(container.textContent).toBe('Загрузите файл');
    expect((getByTestId('upload-area:input') as HTMLInputElement).multiple).toBe(true);
  });

  it('should handle "countLimit" prop', () => {
    const { container, rerender } = render(<UploadArea multiple countLimit={12} />);

    expect(container.textContent).toContain('Загрузите файл');
    expect(container.textContent).toContain('12 файлов');

    rerender(<UploadArea countLimit={3} />);

    expect(container.textContent).toContain('Загрузите файл');
    expect(container.textContent).toContain('3 файла');
  });

  it('should handle "formats" prop', () => {
    const { container, rerender } = render(<UploadArea formats='JPG, GIF' />);

    expect(container.textContent).toContain('Загрузите файл');
    expect(container.textContent).toContain('JPG, GIF');

    rerender(<UploadArea formats='JPG, GIF' countLimit={20} />);

    expect(container.textContent).toContain('Загрузите файл');
    expect(container.textContent).toContain('20 файлов, формат JPG, GIF');
  });

  it('should handle "sizeLimit" prop', () => {
    const { container, rerender } = render(<UploadArea sizeLimit='24 Килобайт' />);

    expect(container.textContent).toContain('Загрузите файл');
    expect(container.textContent).toContain('1 файл, до 24 Килобайт');

    rerender(<UploadArea formats='JPG, GIF' sizeLimit='500 Kb' multiple />);

    expect(container.textContent).toContain('Загрузите файл');
    expect(container.textContent).toContain('Формат JPG, GIF, до 500 Kb');
  });

  it('should handle "disabled" prop', () => {
    const { getByTestId, rerender } = render(<UploadArea />);

    expect(getByTestId('upload-area').tabIndex).toBe(0);
    expect((getByTestId('upload-area:input') as HTMLInputElement).disabled).toBe(false);

    rerender(<UploadArea disabled />);

    expect(getByTestId('upload-area').tabIndex).toBe(-1);
    expect((getByTestId('upload-area:input') as HTMLInputElement).disabled).toBe(true);
  });

  it('should handle focus/blur/click/keydown events on root element', () => {
    const blurSpy = jest.fn();
    const focusSpy = jest.fn();
    const { getByTestId, rerender } = render(
      <UploadArea rootProps={{ onFocus: focusSpy, onBlur: blurSpy }} />,
    );
    const root = getByTestId('upload-area');
    const input = getByTestId('upload-area:input');
    const clickSpy = jest.spyOn(input, 'click');

    expect(root.classList.contains('active')).toBe(false);
    expect(focusSpy).toHaveBeenCalledTimes(0);
    expect(blurSpy).toHaveBeenCalledTimes(0);

    fireEvent.focus(root);
    expect(root.classList.contains('active')).toBe(false);
    expect(focusSpy).toHaveBeenCalledTimes(1);
    expect(blurSpy).toHaveBeenCalledTimes(0);

    fireEvent.blur(root);
    expect(focusSpy).toHaveBeenCalledTimes(1);
    expect(blurSpy).toHaveBeenCalledTimes(1);
    expect(root.classList.contains('active')).toBe(false);

    expect(clickSpy).toHaveBeenCalledTimes(0);
    fireEvent.click(root);
    expect(clickSpy).toHaveBeenCalledTimes(1);

    clickSpy.mockClear();
    expect(clickSpy).toHaveBeenCalledTimes(0);
    fireEvent.keyDown(root, { code: 'Enter' });
    expect(clickSpy).toHaveBeenCalledTimes(1);

    rerender(<UploadArea disabled />);
    expect(root.classList.contains('active')).toBe(false);

    fireEvent.focus(root);
    expect(root.classList.contains('active')).toBe(false);

    fireEvent.blur(root);
    expect(root.classList.contains('active')).toBe(false);

    clickSpy.mockClear();
    expect(clickSpy).toHaveBeenCalledTimes(0);
    fireEvent.click(root);
    expect(clickSpy).toHaveBeenCalledTimes(0);

    clickSpy.mockClear();
    expect(clickSpy).toHaveBeenCalledTimes(0);
    fireEvent.keyDown(root, { code: 'Enter' });
    expect(clickSpy).toHaveBeenCalledTimes(0);
  });

  it('should handle input change event', () => {
    const spy = jest.fn();

    const { getByTestId, rerender } = render(<UploadArea multiple onSelect={spy} />);

    const input = getByTestId('upload-area:input');
    const files = [
      new File([''], 'first.png'),
      new File([''], 'second.png'),
      new File([''], 'third.png'),
    ];
    const event = createEvent.change(input, { target: { files } });

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent(input, event);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toHaveLength(3);

    rerender(<UploadArea multiple={false} onSelect={spy} />);

    spy.mockClear();
    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent(input, event);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toHaveLength(1);
  });

  it('should handle input change event with count limit', () => {
    const spy = jest.fn();

    const { getByTestId } = render(<UploadArea multiple countLimit={2} onSelect={spy} />);

    const input = getByTestId('upload-area:input');
    const files = [
      new File([''], 'first.png'),
      new File([''], 'second.png'),
      new File([''], 'third.png'),
    ];
    const event = createEvent.change(input, { target: { files } });

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent(input, event);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toHaveLength(2);
  });

  it('should handle input change event when files is null', () => {
    const spy = jest.fn();

    const { getByTestId } = render(<UploadArea multiple countLimit={2} onSelect={spy} />);

    const input = getByTestId('upload-area:input');
    const event = createEvent.change(input, { target: { files: null } });

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent(input, event);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toHaveLength(0);
  });

  it('should handle drop event on root element', () => {
    const spy = jest.fn();

    const { getByTestId, rerender } = render(<UploadArea multiple onSelect={spy} />);

    const root = getByTestId('upload-area');
    const files = [
      new File([''], 'first.png'),
      new File([''], 'second.png'),
      new File([''], 'third.png'),
    ];
    const event = createEvent.drop(root, { dataTransfer: { files } });

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent(root, event);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toHaveLength(3);

    rerender(<UploadArea multiple={false} onSelect={spy} />);

    spy.mockClear();
    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent(root, event);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toHaveLength(1);
  });
});
