Базовое использование
```jsx
<div style={{ maxWidth: 400 }}>
  <h3>Просто текст</h3>
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid deserunt earum nam rem. Consectetur,
    dignissimos dolore dolores eos esse itaque iusto nemo optio quaerat quo ratione reprehenderit voluptatem
    voluptates?
  </Text>

  <h3>Обрезание многоточием в одну строку</h3>
  <Text element='div' truncate>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid deserunt earum nam rem. Consectetur,
    dignissimos dolore dolores eos esse itaque iusto nemo optio quaerat quo ratione reprehenderit voluptatem
    voluptates?
  </Text>
</div>
```

Обрезанный текст с подставлением многоточия
```jsx
import { useRef, useLayoutEffect } from 'react';
import isElement from 'lodash/isElement';
import cutTextContent from '../helpers/cut-text-content';

const CutTextContent = () => {
  const textRef = useRef(null);
  useLayoutEffect(() => {
    const { current: element } = textRef;
    isElement(element) && cutTextContent(element, 50);
  }, []);
  return (
    <div ref={textRef} style={{ width: '300px' }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid deserunt earum nam rem. Consectetur,
      dignissimos dolore dolores eos esse itaque iusto nemo optio quaerat quo ratione reprehenderit voluptatem
      voluptates?
    </div>
);};

  <Text>
    <CutTextContent />
  </Text>
```

Варианты размеров
```jsx
import { SIZES } from '../text/';

Array.from(SIZES).map(size => (
  <div key={size}>
    <Text size={size}>
      Text with size {size} px
    </Text>
  </div>
));
```

Варианты цветов
```jsx
import { COLORS } from '../constants';

Array.from(COLORS.keys()).map(color => (
  <div key={color}>
    <Text size={16} color={color}>
      Text with color {color}
    </Text>
  </div>
));
```
