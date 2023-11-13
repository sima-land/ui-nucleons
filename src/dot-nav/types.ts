export type DotNavSize = 's' | 'l';

export interface DotNavProps {
  /** Индекс выбранной точки. */
  current?: number;

  /** Количество точек. */
  total?: number;

  /** Сработает при выборе точки. */
  onSelect?: (index: number) => void;

  /** Размер. */
  size?: DotNavSize;
}
