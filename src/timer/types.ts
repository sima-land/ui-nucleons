import type { ReactNode } from 'react';

export interface TimeDistance {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface TimerProps {
  /** Дата и время события. */
  date: string;

  /** Должна отформатировать данные об оставшемся времени для вывода. */
  format?: (distance: TimeDistance) => ReactNode;

  /** Частота обновления таймера в миллисекундах. */
  timeout?: number;
}
