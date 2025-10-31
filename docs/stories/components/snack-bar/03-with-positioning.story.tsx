import {
  SnackBar,
  SnackBarEndIcon,
  SnackBarImage,
  SnackBarTitle,
  useSnackBarPositioning,
} from '@sima-land/ui-nucleons/snack-bar';
import baggi from './images/baggi.png';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Cross';
import { Button } from '@sima-land/ui-nucleons/button';
import { useRef, useState } from 'react';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export const meta = {
  title: 'Пример использования позиционирования относительно другого элемента',
  category: 'Компоненты/Snackbar',
};

export default function () {
  const [shown, setShown] = useState<boolean>(false);
  const openerRef = useRef<HTMLButtonElement>();

  const relatedRef = useRef<HTMLDivElement>(null);

  const stub = () => {
    alert('Действие!');
  };
  const onClose = () => {
    setShown(false);
  };
  const { state, snackBarProps } = useSnackBarPositioning({
    shown,
    relatedRef,
    onClose,
    props: { onClick: stub },
  });
  return (
    <>
      <Button
        onClick={() => {
          setShown(true);
        }}
        ref={openerRef}
      >
        Показать Snackbar
      </Button>
      <p>
        Molestias maxime aut architecto. Aspernatur aliquid qui fugiat atque similique. Aspernatur
        ut quas architecto est amet et voluptatum. Libero eum quasi autem unde. Molestias maxime aut
        architecto. Aspernatur aliquid qui fugiat atque similique. Aspernatur ut quas architecto est
        amet et voluptatum. Libero eum quasi autem unde. Sit ut qui porro voluptate vel iure et.
        Tempora doloribus officia aliquid. Et quis occaecati rem minus maiores sunt molestiae
        voluptatem. Veniam aut veniam et perspiciatis et accusamus delectus quaerat. Est voluptatem
        quaerat numquam enim nostrum est veritatis. Quia ut omnis molestias. Fuga qui aperiam
        officiis.
      </p>
      <div
        style={{
          position: 'fixed',
          bottom: '60px',
          left: '0px',
          height: '111px',
          width: '100%',
          background: '#333',
          padding: '16px',
          color: '#FFF',
        }}
        ref={relatedRef}
      >
        Тестовый фиксированный контент для относительного позиционирования.
      </div>
      <p>
        Molestias maxime aut architecto. Aspernatur aliquid qui fugiat atque similique. Aspernatur
        ut quas architecto est amet et voluptatum. Libero eum quasi autem unde. Sit ut qui porro
        voluptate vel iure et. Tempora doloribus officia aliquid. Et quis occaecati rem minus
        maiores sunt molestiae voluptatem. Veniam aut veniam et perspiciatis et accusamus delectus
        quaerat. Est voluptatem quaerat numquam enim nostrum est veritatis. Quia ut omnis molestias.
        Fuga qui aperiam officiis. Molestias maxime aut architecto. Aspernatur aliquid qui fugiat
        atque similique. Aspernatur ut quas architecto est amet et voluptatum. Libero eum quasi
        autem unde. Sit ut qui porro voluptate vel iure et. Tempora doloribus officia aliquid. Et
        quis occaecati rem minus maiores sunt molestiae voluptatem. Veniam aut veniam et
        perspiciatis et accusamus delectus quaerat. Est voluptatem quaerat numquam enim nostrum est
        veritatis. Quia ut omnis molestias. Fuga qui aperiam officiis.
      </p>
      {state.isMounted && (
        <SnackBar {...snackBarProps}>
          <SnackBarImage src={baggi} />
          <SnackBarTitle>
            Очень длинный заголовок, очень очень длинный, такой длинный, что не влезает в две строки
          </SnackBarTitle>
          <Button size='xs' viewType='secondary'>
            Действие
          </Button>
          <SnackBarEndIcon
            onClick={onClose}
            icon={<CrossSVG fill={COLORS.get('basic-gray54')} />}
          />
        </SnackBar>
      )}
    </>
  );
}
