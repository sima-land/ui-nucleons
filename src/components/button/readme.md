Базовая кнопка:
```jsx
<Button>Кнопка</Button>
```
Кнопки формы 'square':
```jsx
import { BUTTON_COLORS } from './create-button-style';
BUTTON_COLORS.map(color => (
    <div
        style={{
            display: 'flex',
            width: '450px',
            justifyContent: 'space-around',
            padding: '5px 0',
        }}
        key={color}
    >
        <Button color={color} shape='square'>Кнопка</Button>
        <Button color={color} shape='square' withShadow>С тенью</Button>
        <Button color={color} shape='square' isFocused>В фокусе</Button>
        <Button color={color} shape='square' isDisabled>Неактивная</Button>
    </div>    
))
```
Кнопки формы 'rounded':
```jsx
import { BUTTON_COLORS } from './create-button-style';
BUTTON_COLORS.map(color => (
    <div
        style={{
            display: 'flex',
            width: '450px',
            justifyContent: 'space-around',
            padding: '5px 0',
        }}
        key={color}
    >
        <Button color={color} shape='rounded'>Кнопка</Button>
        <Button color={color} shape='rounded' withShadow>С тенью</Button>
        <Button color={color} shape='rounded' isFocused>В фокусе</Button>
        <Button color={color} shape='rounded' isDisabled>Неактивная</Button>
    </div>
))
```
Кнопки формы 'pill':
```jsx
import { BUTTON_COLORS } from './create-button-style';
BUTTON_COLORS.map(color => (
    <div
        style={{
            display: 'flex',
            width: '450px',
            justifyContent: 'space-around',
            padding: '5px 0',
        }}
        key={color}
    >
        <Button color={color} shape='pill'>Кнопка</Button>
        <Button color={color} shape='pill' withShadow>С тенью</Button>
        <Button color={color} shape='pill' isFocused>В фокусе</Button>
        <Button color={color} shape='pill' isDisabled>Неактивная</Button>
    </div>    
))
```
Кнопки формы 'circle':
```jsx 
import { BUTTON_COLORS } from './create-button-style';
import Icon from '../icon';
import { heart } from '../icons';

BUTTON_COLORS.map(color => (
    <div
        style={{
            display: 'flex',
            width: '300px',
            justifyContent: 'space-around',
            padding: '5px 0',
        }}
        key={color}
    >
        <Button color={color} shape='circle'>
            <Icon icon={heart} color='dark-blue' />
        </Button>
        <Button color={color} shape='circle' withShadow>
            <Icon icon={heart} color='dark-blue' />
        </Button>
        <Button color={color} shape='circle' isFocused>
            <Icon icon={heart} color='dark-blue' />
        </Button>
       <Button color={color} shape='circle' isDisabled>
           <Icon icon={heart} color='dark-blue' />
       </Button>
    </div>
))
```
Кнопки разного представления:
```jsx
<div
    style={{
        display: 'flex',
        width: '400px',
        justifyContent: 'space-around',
        padding: '5px 0',
    }}
>
    <Button appearance='link' href='https://www.sima-land.ru'>Кнопка-ссылка</Button>
    <Button appearance='container'>Кнопка-блок</Button>
    <Button appearance='button'>Кнопка-кнопка</Button>
</div>
```
