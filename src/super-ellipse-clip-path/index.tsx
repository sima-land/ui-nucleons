import React from 'react';

export interface SuperEllipseClipPathProps {
  /** Идентификатор. */
  id?: string;
}

/**
 * Выводит svg-элемент, содержащий clipPath в форме "супер-эллипса".
 * @param props Свойства.
 * @return Элемент.
 */
export const SuperEllipseClipPath = ({ id }: SuperEllipseClipPathProps) => (
  <svg width={0} height={0} style={{ position: 'absolute' }}>
    <defs>
      <clipPath id={id} clipPathUnits='objectBoundingBox'>
        <path d='M1 0.5 C 1 0.856, 0.856 1, 0.5 1 S 0 0.856, 0 0.5 S 0.143 0, 0.5 0 S 1 0.143 1 0.5 Z' />
      </clipPath>
    </defs>
  </svg>
);
