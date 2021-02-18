Иконка-заглушка:
```jsx
<Icon />
```

Все иконки библиотеки:
```jsx
import ThumbsUpSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/thumbs-up.js';
import UploadSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/upload.js';
import ArrowUpSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-up.js';

[ThumbsUpSVG, UploadSVG, ArrowUpSVG].map((icon, index) =>
  <Icon
    key={index}
    style={{ marginRight: 10 }}
    inline
    icon={ThumbsUpSVG}
    size={48}
  />
);
```

Иконки во всех доступных цветах разных размеров:
```jsx
import ThumbsUpSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/thumbs-up.js';
import { COLORS } from '../constants';

<React.Fragment>
  {Array.from(COLORS.keys()).map((colorKey, index) => (
    <div key={colorKey} style={{ marginBottom: 16 }}>
      <Icon
        inline
        size={24}
        icon={ThumbsUpSVG}
        color={colorKey}
        style={{ marginRight: 8 }}
      />
      {colorKey}
    </div>
  ))}
</React.Fragment>
```
