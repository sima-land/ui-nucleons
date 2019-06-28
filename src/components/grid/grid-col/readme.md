Колонки разной ширины:
```jsx
    import GridCol from './';
    import GridRow from '../grid-row';
    import range from 'lodash.range';
    import { justifies } from './__stories__/grid-col.stories';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-col-demo.scss';
    <React.Fragment>
        <div>
            {range(0, 11).map(number => (
                <GridRow externalClass='row' key={number}>
                    <GridCol externalClass='column' width={number + 1}>
                        <div>{`width-${number + 1}`}</div>
                    </GridCol>
                    <GridCol externalClass='column' width={12 - (number + 1)}>
                        <div>{`width-${12 - (number + 1)}`}</div>
                    </GridCol>
                </GridRow>
            ))}
            <GridRow externalClass='row'>
                {range(0, 12).map(number => (
                  <GridCol key={number} externalClass='column' width={1}><div>width-1</div></GridCol>
                ))}
            </GridRow>
            <GridRow externalClass='row'>
                {range(0, 6).map(number => (
                  <GridCol key={number} externalClass='column' width={2}><div>width-2</div></GridCol>
                ))}
            </GridRow>
            <GridRow externalClass='row'>
                {range(0, 4).map(number => (
                  <GridCol key={number} externalClass='column' width={3}><div>width-3</div></GridCol>
                ))}
            </GridRow>
            <GridRow externalClass='row'>
                {range(0, 3).map(number => (
                  <GridCol key={number} externalClass='column' width={4}><div>width-4</div></GridCol>
                ))}
            </GridRow>
            <GridRow externalClass='row'>
                <GridCol externalClass='column' width={12}><div>width-12</div></GridCol>
            </GridRow>
        </div>     
    </React.Fragment>
```

Колонки с разным горизонтальным выравниванием:
```jsx
    import GridCol from './';
    import GridRow from '../grid-row';
    import range from 'lodash.range';
    import { justifies } from './__stories__/grid-col.stories';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-col-demo.scss';
    <div>
        {justifies.map(alignment => (
            <React.Fragment key={alignment}>
                <GridRow externalClass='row' justify='center'>
                    <GridCol externalClass='column' width={8} justify={alignment}>
                        <div style={{ marginRight: '8px' }} className='content'>{`justify-${alignment}`}</div>
                        <div style={{ marginRight: '8px' }} className='content'>{`justify-${alignment}`}</div>
                        <div className='content'>{`justify-${alignment}`}</div>
                    </GridCol>
                </GridRow>
            </React.Fragment>
        ))}
    </div>
```

Колонки с разным вертикальным выравниванием:
```jsx
    import GridCol from './';
    import GridRow from '../grid-row';
    import range from 'lodash.range';
    import { alignments } from './__stories__/grid-col.stories';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-col-demo.scss';
    <div>
        {alignments.map(alignment => (
            <React.Fragment key={alignment}>
                <GridRow justify='center'>
                    <GridCol externalClass='high-column' justify='center' width={3} alignItems={alignment} wrap>
                        <div className='content'>{`items-${alignment}`}</div>
                        <div className='content'>{`items-${alignment}`}</div>
                        <div className='content'>{`items-${alignment}`}</div>
                    </GridCol>
                </GridRow>
            </React.Fragment>
        ))}
    </div>
```

Колонки с разными отступами:
```jsx
    import GridCol from './';
    import GridRow from '../grid-row';
    import range from 'lodash.range';
    import { alignments } from './__stories__/grid-col.stories';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-col-demo.scss';
    <div>
        {['zero', 's', 'm', 'l'].map(gutter => (
            <div key={gutter}>
                <p className='title'>{`Columns with gutter-${gutter}`}</p>
                <GridRow justify='center' gutter={gutter}>
                    <GridCol externalClass='column' justify='center' gutter={gutter} />
                    <GridCol externalClass='column' justify='center' gutter={gutter} />
                    <GridCol externalClass='column' justify='center' gutter={gutter} />
                    <GridCol externalClass='column' justify='center' gutter={gutter} />
                </GridRow>
            </div>
        ))}
    </div>
```

