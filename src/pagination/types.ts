import type { AnchorHTMLAttributes, HTMLAttributes, MouseEvent, ReactNode, Ref } from 'react';

export interface PaginationButton {
  type: 'page' | 'prev' | 'next' | 'more';
  value: number;
}

export interface PaginationItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  rounds?: 'all' | 'right' | 'left';
  checked?: boolean;
  disabled?: boolean;
  rootRef?: Ref<HTMLAnchorElement>;
}

export interface GetPaginationItemProps {
  (userProps?: PaginationItemProps): PaginationItemProps;
}

export interface RenderPaginationItem {
  (item: PaginationButton, getProps: GetPaginationItemProps): ReactNode;
}

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  rootRef?: Ref<HTMLDivElement>;
  current?: number;
  total?: number;
  onPageChange?: (event: MouseEvent<HTMLAnchorElement>, button: PaginationButton) => void;
  getItems?: (payload: { current: number; total: number }) => PaginationButton[];
  renderItem?: RenderPaginationItem;
}
