import React from 'react';
import { Carousel } from '..';
import { demoItems } from './demo-items';
import classnames from 'classnames/bind';
import classes from './test-carousel.module.scss';
import { someImageUrl } from '../../../.storybook/utils';

const cx = classnames.bind(classes);

export default {
  title: 'desktop/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <h3>With controls; draggable; infinite; slide by 3; start from 4</h3>
      <Carousel
        targetIndex={3}
        items={demoItems.map((item, index) => ({ ...item, index: index + 1 }))}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
            children={item.index}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>With controls; not draggable; infinite; slide by 1</h3>
      <Carousel
        step={1}
        draggable={false}
        items={demoItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>Without controls; draggable; infinite</h3>
      <Carousel
        withControls={false}
        items={demoItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>With controls; finite</h3>
      <Carousel
        infinite={false}
        items={demoItems}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>Autoplay + infinite</h3>
      <Carousel
        draggable={false}
        autoplay
        autoplayTimeout={1000}
        items={demoItems}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>Autoplay + infinite + draggable</h3>
      <Carousel
        draggable
        autoplay
        autoplayTimeout={1000}
        items={demoItems}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />
      <h3>Autoplay + infinite + draggable + pause on hover</h3>
      <Carousel
        draggable
        autoplay
        autoplayTimeout={1000}
        autoplayHoverPause
        items={demoItems}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>Autoplay + finite + draggable + pause on hover</h3>
      <Carousel
        draggable
        autoplay
        autoplayTimeout={1000}
        autoplayHoverPause
        infinite={false}
        items={[...demoItems, ...demoItems, ...demoItems]}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />
    </>
  );
}

Primary.storyName = 'Простой пример';

export function Vertical() {
  return (
    <>
      <h3>With controls; draggable; infinite; slide by 3</h3>
      <Carousel
        vertical
        items={demoItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item', 'vertical')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: cx('test-carousel', 'vertical'),
        }}
      />

      <h3>With controls; not draggable; infinite; slide by 1</h3>
      <Carousel
        vertical
        step={1}
        draggable={false}
        items={demoItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item', 'vertical')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: cx('test-carousel', 'vertical'),
        }}
      />

      <h3>Without controls; draggable; infinite; slide by 2</h3>
      <Carousel
        vertical
        step={2}
        withControls={false}
        items={demoItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item', 'vertical')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: cx('test-carousel', 'vertical'),
        }}
      />

      <h3>With controls; finite</h3>
      <Carousel
        vertical
        step={2}
        infinite={false}
        items={demoItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item', 'vertical')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: cx('test-carousel', 'vertical'),
        }}
      />
    </>
  );
}

Vertical.storyName = 'Вертикальная карусель';

export function PreventLinkClickOnDrag() {
  return (
    <div style={{ maxWidth: '1024px', margin: '24px auto' }}>
      <Carousel
        containerProps={{ style: { width: '100%' } }}
        items={[0, 10, 100, 1003, 1024, 1026, 1031, 1044, 1053]}
        renderItem={(id, index) => (
          <a
            key={index}
            href='https://www.sima-land.ru'
            style={{
              display: 'block',
              flexShrink: 0,
              width: 'calc(50% - 8px)',
              height: '320px',
              marginLeft: index ? '16px' : 0,
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#eee',
            }}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={someImageUrl({ w: 320, h: 320, id })}
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </a>
        )}
      />
    </div>
  );
}

PreventLinkClickOnDrag.storyName = 'Тест: предотвращение клика при перетаскивании мышью';
