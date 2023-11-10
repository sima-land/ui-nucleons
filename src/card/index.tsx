import { Plate, PlateProps } from '../plate';
import { CardContent, CardFooter, CardHeader } from './slots';
import { CardContext } from './utils';
import { defineSlots } from '../helpers/define-slots';
import { TopBar } from '../top-bar';
import { BottomBar } from '../bottom-bar';
import { MediumRounds, SmallRounds } from '../styling/shapes';
import classnames from 'classnames';
import styles from './card.module.scss';

export type CardProps = PlateProps;

export interface CardComponent {
  (props: CardProps): JSX.Element;
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
}

/**
 * Карточка - блок с возможностью быстро задавать тень, скругления, шапку и подвал.
 * @param props Свойства.
 * @return Элемент.
 */
export const Card: CardComponent = ({ children, className, rounds, ...restProps }) => {
  const { header, content, footer, topBar, bottomBar } = defineSlots(children, {
    topBar: TopBar,
    content: CardContent,
    bottomBar: BottomBar,
    header: CardHeader,
    footer: CardFooter,
  });

  return (
    <CardContext.Provider value={{ rounds }}>
      <Plate {...restProps} rounds={rounds} className={classnames(styles.root, className)}>
        {!topBar && header}
        {topBar && (
          <TopBar
            {...topBar.props}
            className={classnames(
              topBar.props.className,
              rounds === 's' && SmallRounds.top,
              rounds === 'm' && MediumRounds.top,
            )}
          />
        )}
        {content}
        {bottomBar && <BottomBar {...bottomBar.props} />}
        {!bottomBar && footer}
      </Plate>
    </CardContext.Provider>
  );
};

/**
 * @deprecated Нужно использовать TopBar.
 */
Card.Header = CardHeader;

/**
 * @deprecated Нужно использовать `import { CardContent }`.
 */
Card.Content = CardContent;

/**
 * @deprecated Нужно использовать BottomBar.
 */
Card.Footer = CardFooter;

export { CardContent };
