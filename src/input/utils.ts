import { MouseEventHandler, RefObject, useCallback, useEffect, useState } from 'react';
import { COLORS } from '../colors';

/**
 * Получив значения value и defaultValue для поля, определяет является ли оно заполненным.
 * @param value Значение value.
 * @param defaultValue Значение defaultValue.
 * @return Является ли поле заполненным.
 */
export function defineFilled(value: unknown, defaultValue: unknown): boolean {
  return [value, defaultValue].some(v => typeof v !== 'undefined' && `${v}` !== '');
}

/**
 * Получи информацию о состоянии поля возвращает цвет placeholder.
 * @param state Состояние.
 * @return Цвет.
 */
export function definePlaceholderColor({
  failed,
  disabled,
}: {
  failed?: boolean;
  disabled?: boolean;
}): string | undefined {
  let placeholderColor: string | undefined = undefined;

  switch (true) {
    case failed:
      placeholderColor = COLORS.get('additional-deep-red');
      break;
    case disabled:
      placeholderColor = COLORS.get('basic-gray24');
      break;
    case !disabled:
      placeholderColor = COLORS.get('basic-gray38');
      break;
  }

  return placeholderColor;
}

/**
 * Хук состояния заполненности поля текстовым значением.
 * @param ref Ref элемента поля.
 * @param affectProps Свойства, влияющие на состояние заполненности.
 * @return Кортеж: состояние; функция обновления состояния.
 */
export function useFilledState(
  ref: RefObject<HTMLInputElement | HTMLTextAreaElement>,
  {
    value,
    defaultValue,
  }: {
    value: unknown;
    defaultValue: unknown;
  },
): [boolean, MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>] {
  const [filled, setFilled] = useState<boolean>(() => defineFilled(value, defaultValue));

  const updateFilled = useCallback<MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>>(
    event => {
      setFilled(Boolean(event.currentTarget.value));
    },
    [],
  );

  useEffect(() => {
    setFilled(Boolean(ref.current?.value));
  });

  return [filled, updateFilled];
}

/**
 * Хук, формирующий callback события mousedown на блоке поля, фокусирующий пользователя на поле.
 * @param fieldRef Ref элемента поля.
 * @param callback Будет вызвана по событию mousedown.
 * @return Функция обратного вызова.
 */
export function useFieldMouseDown(
  fieldRef: RefObject<HTMLInputElement | HTMLTextAreaElement>,
  callback?: MouseEventHandler<HTMLDivElement>,
) {
  return useCallback<MouseEventHandler<HTMLDivElement>>(
    event => {
      const field = fieldRef.current;

      callback?.(event);

      if (!event.defaultPrevented && field && event.target !== field) {
        event.preventDefault();
        field.focus();
      }
    },
    [fieldRef, callback],
  );
}
