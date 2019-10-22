```jsx
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-layout-demo.scss';
    import GridCol from '../grid-col';
    import GridRow from '../grid-row';
    <GridLayout >
        <div className='content-green'>
            GridLayout
        </div>
        <GridRow externalClass='row-margin'>
            <GridCol desktop={3} mobile={4}>
                <div className='content-red'>d-3 m-4</div>
            </GridCol>
            <GridCol desktop={7} mobile={2}>
                <div className='content-red'>d-7 m-2</div>
            </GridCol>
            <GridCol desktop={2} mobile={2}>
                <div className='content-red'>d-2 m-2</div>
            </GridCol>
        </GridRow>
        <GridRow wrap externalClass='row-margin'>
            <GridCol desktop={5} mobile={8} externalClass='column-margin'>
                <div className='content-red'>d-5 m-8</div>
            </GridCol>
            <GridCol desktop={2} mobile={2} externalClass='column-margin'>
                <div className='content-red'>d-2 m-2</div>
            </GridCol>
            <GridCol desktop={5} mobile={6} externalClass='column-margin'>
                <div className='content-red'>d-5 m-6</div>
            </GridCol>
        </GridRow>
    </GridLayout>
```
С разными настройками:
```jsx
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-layout-demo.scss';
    import GridCol from '../grid-col';
    import GridRow from '../grid-row';
    <div>
    <GridLayout
        containerProps={{ className: 'dotted' }}
        smPadding='lg'
        xsPadding='lg'
        xxsPadding='lg'
        xxxsPadding='lg'
        smMaxWidth='md'
        xsMaxWidth='md'
        xxsMaxWidth='md'
        xxxsMaxWidth='md'
    >
        <div className='content-green'>Settings for desktop</div>
    </GridLayout>
    <br />
    <GridLayout
        containerProps={{ className: 'dotted' }}
        mdPadding='sm'
        xxlMaxWidth='sm'
        xlMaxWidth='sm'
        lgMaxWidth='sm'
        mdMaxWidth='sm'
    >
        <div className='content-green'>Settings for mobile</div>
    </GridLayout>
    </div>
```
