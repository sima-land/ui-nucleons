Свойство clipPath задает обрезку, ссылаясь на ID, с которым создан компонент SuperEllipseClipPath.  
`style={{ clipPath: 'url(#id') }}`  
!использование svg в CSS clipPath не работает в IE!
```jsx
const CLIP_PATH_ID = 'this-is-ID';
<React.Fragment>
  <div
    style={{
      margin: 50,
      width: 150,
      height: 150,
      background: '#aaa',

      // Свойство clipPath задает обрезку, ссылаясь на ID, с которым создан компонент SuperEllipseClipPath.
      clipPath: `url(#${CLIP_PATH_ID})`,
    }}
  />
  <SuperEllipseClipPath id={CLIP_PATH_ID} />
</React.Fragment>
```
