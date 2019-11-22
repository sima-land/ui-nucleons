Базовый виджет без свойств - это "section" со вложенным "div".

```jsx
<BaseWidget>
    Контент базового виджета.
</BaseWidget>
```

Пример базового виджета с шапкой и подвалом без дополнительных свойств.

```jsx
<BaseWidget header='Шапка' footer='Подвал'>
    Контент базового виджета.
</BaseWidget>
```

Пример базового виджета со всеми возможными свойствами.

```jsx
<BaseWidget
    container='div'
    containerProps={{
        style: {
            backgroundColor: 'rgba(0, 0, 0, .1)',
            borderRadius: '3px',
            padding: '24px',
        }
    }}
    header='Шапка'
    headerContainer='h4'
    headerContainerProps={{
        style: {
            marginTop: 0,
        },
    }}
    childrenContainer='p'
    childrenContainerProps={{
        style: {
            color: 'green',
        },
    }}
    footer='Подвал'
    footerContainer='i'
    footerContainerProps={{
        style: {
            opacity: '0.5',
        },
    }}
>
    Контент базового виджета.
</BaseWidget>
```
