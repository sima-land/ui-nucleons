Строки с разным выравниванием:
```jsx
    import GridCol from '../grid-col/';
    import { justifies } from './__stories__/grid-row.stories';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-row-demo.scss';
    <React.Fragment>
        {justifies.map(justify => (
            <React.Fragment key={justify}>
                <p className='title'>{`justify-${justify}`}</p>
                <GridRow justify={justify} externalClass='row'>
                    <GridCol externalClass='column' width={1}>column</GridCol>
                    <GridCol externalClass='column' width={1}>column</GridCol>
                    <GridCol externalClass='column' width={1}>column</GridCol>
                </GridRow>
            </React.Fragment>
        ))}      
    </React.Fragment>
```
Строки с разными отступами:
```jsx
    import GridCol from '../grid-col/';
    import { justifies } from './__stories__/grid-row.stories';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-row-demo.scss';
    ['zero', 's', 'm', 'l'].map(gutter => (
        <React.Fragment key={gutter}>
            <p className='title'>{`With gutter-${gutter}`}</p>
            <GridRow externalClass='row' justify='center' gutter={gutter}>
              <GridCol externalClass='column' justify='center' gutter={gutter} />
              <GridCol externalClass='column' justify='center' gutter={gutter} />
              <GridCol externalClass='column' justify='center' gutter={gutter} />
              <GridCol externalClass='column' justify='center' gutter={gutter} />
            </GridRow>
            <GridRow externalClass='row' justify='center' gutter={gutter}>
              <GridCol externalClass='column' justify='center' gutter={gutter} />
              <GridCol externalClass='column' justify='center' gutter={gutter} />
              <GridCol externalClass='column' justify='center' gutter={gutter} />
              <GridCol externalClass='column' justify='center' gutter={gutter} />
            </GridRow>
            <GridRow externalClass='row' justify='center' gutter={gutter}>
              <GridCol externalClass='column' justify='center' gutter={gutter} />
              <GridCol externalClass='column' justify='center' gutter={gutter} />
              <GridCol externalClass='column' justify='center' gutter={gutter} />
              <GridCol externalClass='column' justify='center' gutter={gutter} />
            </GridRow>
        </React.Fragment>
    ))
```
