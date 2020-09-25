Компонент Link это "умная ссылка".

Он поддерживает свойства элемента <code>a</code>:

```jsx
<React.Fragment>
  Просто <Link href='https://ya.ru' target='_blank'>ссылка</Link>
</React.Fragment>
```

Однако при передаче свойства **pseudo** элемент <code>a</code> получает атрибуты **role="button"** и **tabindex**:

```jsx
<React.Fragment>
  Выглядит как <Link pseudo>ссылка</Link> но не ведет себя как <Link pseudo>ссылка</Link>
</React.Fragment>
```
> **Link** не использует замену на **button** при установке **pseudo** так как HTML5 разрешает не устанавливать атрибут **href** у ссылок

> **Link** не предотвращает установку атрибута **href** при **pseudo === true** чтобы поведение оставалось очевидным
