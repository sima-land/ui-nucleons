import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LINK_COLORS } from '../create-link-style';
import Link from '../';

const padding = {
  padding: '10px',
};
const grayBackground = {
  ...padding,
  background: '#d1d2d6',
  display: 'inline-block',
};
const marginRight = {
  marginRight: '15px',
};

storiesOf('Link', module)
  .add('without underline', () => (
    <div>
      <div style={grayBackground}>
        {LINK_COLORS.map(color => (
          <span
            style={marginRight}
          >
            <Link color={color}>Ссылка</Link>
          </span>
        ))}
      </div>
      <div style={padding}>
        {LINK_COLORS.map(color => (
          <span
            style={marginRight}
          >
            <Link color={color}>Ссылка</Link>
          </span>
        ))}
      </div>
    </div>
  ))
  .add('with underline', () => (
    <div>
      <div style={grayBackground}>
        {LINK_COLORS.map(color => (
          <span
            style={marginRight}
          >
            <Link color={color} underlined>Ссылка</Link>
          </span>
        ))}
      </div>
      <div style={padding}>
        {LINK_COLORS.map(color => (
          <span
            style={marginRight}
          >
            <Link color={color} underlined>Ссылка</Link>
          </span>
        ))}
      </div>
    </div>
  ))
  .add('with underline and pseudo', () => (
    <div>
      <div style={grayBackground}>
        {LINK_COLORS.map(color => (
          <span
            style={marginRight}
          >
            <Link color={color} underlined pseudo>Ссылка</Link>
          </span>
        ))}
      </div>
      <div style={padding}>
        {LINK_COLORS.map(color => (
          <span
            style={marginRight}
          >
            <Link color={color} underlined pseudo>Ссылка</Link>
          </span>
        ))}
      </div>
    </div>
  ))
  .add('with external icon', () => (
    <div>
      <div style={grayBackground}>
        {LINK_COLORS.map(color => (
          <span
            style={marginRight}
          >
            <Link color={color} external>Ссылка</Link>
          </span>
        ))}
      </div>
      <div style={padding}>
        {LINK_COLORS.map(color => (
          <span
            style={marginRight}
          >
            <Link color={color} external>Ссылка</Link>
          </span>
        ))}
      </div>
    </div>
  ))
  .add('with disable hover', () => (
    <div>
      <div style={grayBackground}>
        {LINK_COLORS.map(color => (
          <span
            style={marginRight}
          >
            <Link color={color} disableHoverEffect>Ссылка</Link>
          </span>
        ))}
      </div>
      <div style={padding}>
        {LINK_COLORS.map(color => (
          <span
            style={marginRight}
          >
            <Link color={color} disableHoverEffect>Ссылка</Link>
          </span>
        ))}
      </div>
    </div>
  ))
  .add('with urls', () => (
    <div>
      <Link
        underlined
        url='https://www.sima-land.ru/prazdniki/'
        style={marginRight}
      >
        Full Sima Url
      </Link>
      <Link
        underlined
        url='sima-land.ru/igrushki/'
        style={marginRight}
      >
        Short Sima Url
      </Link>
      <Link
        underlined
        url='https://storybook.js.org/'
      >
        Other Url
      </Link>
    </div>
  ))
  .add('with urlParams', () => (
    <div>
      <Link
        underlined
        urlParams={{
          sort: 'date',
          perPage: 11,
          viewtype: 'cards',
        }}
        style={marginRight}
      >
        Without url
      </Link>
      <Link
        underlined
        url='https://www.sima-land.ru/prazdniki/'
        urlParams={{
          sort: 'date',
          perPage: 11,
          viewtype: 'cards',
        }}
        style={marginRight}
      >
        Sima with get-params
      </Link>
      <Link
        underlined
        external
        withIcon={false}
        url='https://storybook.js.org/'
        urlParams={{
          sort: 'date',
          perPage: 11,
          viewtype: 'cards',
        }}
      >
        External without get-params
      </Link>
    </div>
  ))
  .add('with anchor', () => (
    <div>
      <Link
        underlined
        anchor='test'
        style={marginRight}
      >
        Link without url
      </Link>
      <Link
        underlined
        url='https://www.sima-land.ru/prazdniki/'
        anchor='test'
        style={marginRight}
      >
        Link with anchor
      </Link>
    </div>
  ))
  .add('with target', () => (
    <div>
      <Link
        underlined
        url='https://www.sima-land.ru/prazdniki/'
        target='_parent'
        style={marginRight}
      >
        Link with not allowed target
      </Link>
      <Link
        underlined
        external
        withIcon={false}
        url='https://www.sima-land.ru/prazdniki/'
        target='_parent'
        style={marginRight}
      >
        External link with not allowed target
      </Link>
      <Link
        underlined
        url='https://www.sima-land.ru/prazdniki/'
        target='_blank'
        style={marginRight}
      >
        Blank target
      </Link>
      <Link
        underlined
        url='https://www.sima-land.ru/prazdniki/'
        target='_self'
        style={marginRight}
      >
        Self target
      </Link>
    </div>
  ))
  .add('with actions', () => (
    <div>
      <Link
        underlined
        onClick={action('click')}
        style={marginRight}
      >
        Click
      </Link>
      <Link
        underlined
        onMouseEnter={action('mouse enter')}
        style={marginRight}
      >
        Mouse enter
      </Link>
      <Link
        underlined
        onMouseLeave={action('mouse leave')}
      >
        Mouse leave
      </Link>
    </div>
  ));
