Отображение цены с разными графемами валют
```jsx
import { graphemes } from '../constants';
    graphemes.map((grapheme, index) => 
        <span style={{ marginRight: '15px' }} key={index}>
            <Price value={1234.56} currencyGrapheme={grapheme} />
        </span>
    )
```

Отображение цены с дробной частью
```jsx
import { graphemes } from '../constants';
    graphemes.map((grapheme, index) => 
        <span style={{ marginRight: '15px' }} key={index*2}>
            <Price value={1234.56} currencyGrapheme={grapheme} withFractionalPart />
        </span>
    )
```

Отображение цены с дробной частью вверху
```jsx
import { graphemes } from '../constants';
    graphemes.map((grapheme, index) => 
        <span style={{ marginRight: '15px' }} key={index*3}>
            <Price
                value={1234.56} 
                currencyGrapheme={grapheme}
                withFractionalPart
                fractionalInSuper
            />
        </span>
    )
```

Отображение цены с дробной частью вверху и выделенной жирным начертанием целой частью
```jsx
import { graphemes } from '../constants';
    graphemes.map((grapheme, index) => 
        <span style={{ marginRight: '15px' }} key={index*4}>
            <Price
                value={1234.56}
                currencyGrapheme={grapheme}
                withFractionalPart
                fractionalInSuper
                boldIntegerPart
            />
        </span>
    )
```

Отображение с разными графемами перед значением цены
```jsx
import { graphemes } from '../constants';
    graphemes.map((grapheme, index) => 
        <span style={{ marginRight: '15px' }} key={index*5}>
            <Price
                value={1234.56}
                currencyGrapheme={grapheme}
                withFractionalPart
                fractionalInSuper
                boldIntegerPart
                beforePrice
            />
        </span>
    )
```

Отображение старой цены с разными графемами
```jsx
import { graphemes } from '../constants';
    graphemes.map((grapheme, index) => 
        <span style={{ marginRight: '15px' }} key={index*5}>
            <Price
                old
                value={1234.56}
                currencyGrapheme={grapheme}
                withFractionalPart
                fractionalInSuper
                boldIntegerPart
            />
        </span>
    )
```
