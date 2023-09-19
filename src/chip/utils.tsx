import type { ChipProps } from './types';
import { ChipIconButton } from './chip';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Cross';

/**
 * Возвращает свойства для чипа, добавляющие ему кнопку удаления.
 * @param options Опции.
 * @return Свойства.
 */
export function getDeletableChipProps({ onDelete }: { onDelete?: VoidFunction } = {}): ChipProps {
  return {
    padding: 'start',
    adornmentGutter: 'unset',
    endAdornment: (
      <ChipIconButton type='button' onClick={onDelete}>
        <CrossSVG fill='currentColor' />
      </ChipIconButton>
    ),
  };
}
