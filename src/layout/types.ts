export type Breakpoint = 'mxs' | 'ms' | 'mm' | 'ml' | 'xs' | 's' | 'm' | 'l' | 'xl';

export interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  /** Тэг. */
  element?: string;

  /** Список точек остановки на которых необходимо отключить ограничение ширины. */
  disabledOn?: Array<Breakpoint>;
}
