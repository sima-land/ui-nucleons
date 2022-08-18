import React, { useState, useCallback } from 'react';
import { Carousel } from '..';

export default {
  title: 'common/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [state, setState] = useState<number>(0);

  const handleClick = useCallback((event: React.MouseEvent) => {
    if (!event.defaultPrevented) {
      setState(n => n + 1);
    }
  }, []);

  return (
    <div style={{ maxWidth: '100%', margin: '0px auto' }}>
      <h3>Image clicked {state} times</h3>
      <style>
        {`
          .carousel-item:not(:first-child) {
            margin-left: 16px;
          }
        `}
      </style>
      <Carousel>
        {[0, 10, 1003].map((id, index) => (
          <Carousel.Item key={[id, index].join(':')}>
            <div
              className='carousel-item'
              style={{
                display: 'block',
                flexShrink: 0,
                width: '50%',
                height: '320px',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#eee',
              }}
            >
              <img
                onClick={handleClick}
                src={`https://picsum.photos/id/${id}/320`}
                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

// @todo разные размеры элементов; все по 100%; все фикс N% где N - меньше 100; все фикс ширины в px;
// вертикально и горизонтально
// бесконечная и конечная прокрутка
// автопрокрутка и без
