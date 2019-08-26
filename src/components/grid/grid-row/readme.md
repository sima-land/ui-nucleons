Строки с разным выравниванием по горизонтали:
```jsx
    import GridCol from '../grid-col/';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-row-demo.scss';
    <div className='container-with-border'>
        {['start', 'between', 'around', 'center', 'end'].map(justify => (
            <React.Fragment key={justify}>
                <p className='title'>{`justify: ${justify}`}</p>
                <GridRow justify={justify} externalClass='row'>
                    <GridCol desktop={3} mobile={1}><div className='content-blue'>column</div></GridCol>
                    <GridCol desktop={3} mobile={1}><div className='content-blue'>column</div></GridCol>
                    <GridCol desktop={3} mobile={1}><div className='content-blue'>column</div></GridCol>
                </GridRow>
            </React.Fragment>
        ))}
    </div>
```
Строки с разным выравниванием по вертикали:
```jsx
    import GridCol from '../grid-col/';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-row-demo.scss';
    <div className='container-with-border'>
        {['start', 'center', 'end', 'stretch', 'baseline'].map(alignment => (
            <React.Fragment key={alignment}>
                <p className='title'>{`alignItems: ${alignment}`}</p>
                <GridRow alignItems={alignment} externalClass='high-row'>
                    <GridCol desktop={3} mobile={3} externalClass='column-background'>
                        <div className='content-blue'>
                            <div>content</div>
                            <div>content</div>
                            <div>content</div>
                        </div>
                    </GridCol>
                    <GridCol desktop={6} mobile={2} externalClass='column-line-height'>
                        <div className='content-blue'>content</div>
                    </GridCol>
                    <GridCol desktop={3} mobile={3} externalClass='column-background'>
                        <div className='content-blue'>
                            <div>content</div>
                            <div>content</div>
                        </div>
                    </GridCol>
                </GridRow>
            </React.Fragment>
        ))}
    </div>
```
Строки с параметром переноса блоков на следующую строку:
```jsx
    import GridCol from '../grid-col/';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-row-demo.scss';
    <div className='container-with-border'>
        <p className='title'>without wrap param</p>
        <GridRow>
            <GridCol desktop={12} mobile={2} externalClass='col-with-top-margin'>
                <div className='content-blue'>First</div>
            </GridCol>
            <GridCol desktop={3} mobile={6} externalClass='col-with-top-margin'>
                <div className='content-blue'>Second</div>
            </GridCol>
            <GridCol desktop={9} mobile={8} externalClass='col-with-top-margin'>
                <div className='content-blue'>Third</div>
            </GridCol>
        </GridRow>
        <p className='title'>with wrap param</p>
        <GridRow wrap>
            <GridCol desktop={12} mobile={2} externalClass='col-with-top-margin'>
                <div className='content-blue'>First</div>
            </GridCol>
            <GridCol desktop={3} mobile={6} externalClass='col-with-top-margin'>
                <div className='content-blue'>Second</div>
            </GridCol>
            <GridCol desktop={9} mobile={8} externalClass='col-with-top-margin'>
                <div className='content-blue'>Third</div>
            </GridCol>
        </GridRow>
    </div>
```
Строки без отступов между колонками:
```jsx
    import GridCol from '../grid-col/';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-row-demo.scss';
    <div className='container-with-border'>
        <p className='title'>without withoutGutters param</p>
        <GridRow>
            <GridCol desktop={3} mobile={4}><div className='content-blue'>First</div></GridCol>
            <GridCol desktop={2} mobile={1}><div className='content-blue'>Second</div></GridCol>
            <GridCol desktop={3} mobile={2}><div className='content-blue'>Third</div></GridCol>
            <GridCol desktop={4} mobile={1}><div className='content-blue'>Fourth</div></GridCol>
        </GridRow>
        <p className='title'>with withoutGutters param</p>
        <GridRow withoutGutters>
            <GridCol desktop={3} mobile={4}><div className='content-blue'>First</div></GridCol>
            <GridCol desktop={2} mobile={1}><div className='content-blue'>Second</div></GridCol>
            <GridCol desktop={3} mobile={2}><div className='content-blue'>Third</div></GridCol>
            <GridCol desktop={4} mobile={1}><div className='content-blue'>Fourth</div></GridCol>
        </GridRow>
    </div>
```
