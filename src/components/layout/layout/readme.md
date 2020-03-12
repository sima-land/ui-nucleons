```jsx
import '!style-loader!css-loader!sass-loader!./__stories__/layout-demo.scss';

<div>
  <Layout containerProps={{ className: 'content-green' }}>
    Default Layout
  </Layout>
  <Layout
    mdPadding='lg'
    smPadding='sm'
    xxsPadding='md'
    xxxsPadding='sm'
    xlMaxWidth='lg'
    lgMaxWidth='md'
    smMaxWidth='sm'
    xsMaxWidth='xs'
  >
    <div className='content-green'>
      Layout with desktop and mobile settings
    </div>
  </Layout>
</div>
```
