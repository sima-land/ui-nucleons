Компонент с функцией формирования стилей:
```jsx
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-entity-demo.scss';
    <GridEntity tag='section' createClasses={() => 'section'}>
          This component takes user's function in createClasses prop and takes HTML-tag in tag prop.
          And returns component with tag and classes, formatted by function from createClasses.
    </GridEntity>
```


