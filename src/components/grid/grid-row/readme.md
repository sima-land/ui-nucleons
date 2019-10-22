С кастомными настройками:
```jsx
    import GridCol from '../grid-col/';
    import range from 'lodash/range';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-row-demo.scss';
    <div className='container-with-border'>
      <p className='title'>Сетка на 12 колонок для десктопной версии</p>
      <GridRow
        mdColumns={12}
        mdGutters='lg'
        smGutters='lg'
      >
        {range(0, 12).map(number => (
          <GridCol
            key={number}
            externalClass='col-with-top-margin'
            desktop={1}
            mobile={1}
          >
            <div className='content-blue'>1</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow
        mdColumns={12}
        mdGutters='lg'
        smGutters='lg'
      >
        {range(0, 6).map(number => (
          <GridCol
            key={number}
            externalClass='col-with-top-margin'
            desktop={2}
            mobile={2}
          >
            <div className='content-blue'>2</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow
        mdColumns={12}
        mdGutters='lg'
        smGutters='lg'
      >
        {range(0, 4).map(number => (
          <GridCol
            key={number}
            externalClass='col-with-top-margin'
            desktop={3}
            mobile={3}
          >
            <div className='content-blue'>3</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow
        mdColumns={12}
        mdGutters='lg'
        smGutters='lg'
      >
        {range(0, 3).map(number => (
          <GridCol
            key={number}
            externalClass='col-with-top-margin'
            desktop={4}
            mobile={4}
          >
            <div className='content-blue'>4</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow
        mdColumns={12}
        mdGutters='lg'
        smGutters='lg'
      >
        {range(0, 2).map(number => (
          <GridCol
            key={number}
            externalClass='col-with-top-margin'
            desktop={6}
            mobile={6}
          >
            <div className='content-blue'>6</div>
          </GridCol>
        ))}
      </GridRow>
      <GridRow
        mdColumns={12}
        mdGutters='lg'
        smGutters='lg'
      >
        <GridCol
          externalClass='col-with-top-margin'
          desktop={12}
          mobile={12}
        >
          <div className='content-blue'>12</div>
        </GridCol>
      </GridRow>
      <p className='title'>Сетка на 8 колонок для мобильной версии</p>
            <GridRow
              lgColumns={8}
              lgGutters='md'
            >
              {range(0, 8).map(number => (
                <GridCol
                  key={number}
                  externalClass='col-with-top-margin'
                  mobile={1}
                  desktop={1}
                >
                  <div className='content-blue'>1</div>
                </GridCol>
              ))}
            </GridRow>
            <GridRow
              lgColumns={8}
              lgGutters='md'
            >
              {range(0, 4).map(number => (
                <GridCol
                  key={number}
                  externalClass='col-with-top-margin'
                  mobile={2}
                  desktop={2}
                >
                  <div className='content-blue'>2</div>
                </GridCol>
              ))}
            </GridRow>
            <GridRow
              lgColumns={8}
              lgGutters='md'
            >
              {range(0, 2).map(number => (
                <GridCol
                  key={number}
                  externalClass='col-with-top-margin'
                  mobile={4}
                  desktop={4}
                >
                  <div className='content-blue'>4</div>
                </GridCol>
              ))}
            </GridRow>
            <GridRow
              lgColumns={8}
              lgGutters='md'
            >
              <GridCol
                externalClass='col-with-top-margin'
                mobile={8}
                desktop={8}
              >
                <div className='content-blue'>8</div>
              </GridCol>
            </GridRow>
    </div>
```


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
