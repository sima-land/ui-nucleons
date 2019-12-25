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
        <Layout
            mdPadding='lg'
            xlMaxWidth='lg'
            lgMaxWidth='md'
        >
            <div className='content-green'>
                Layout with desktop settings
            </div>
        </Layout>
        <Layout
            xxlMaxWidth='sm'
            xsMaxWidth='xs'
            xxsPadding='md'
            xxxsPadding='sm'
        >
            <div className='content-green'>
                Layout with mobile settings
            </div>
        </Layout>
    </div>
```
