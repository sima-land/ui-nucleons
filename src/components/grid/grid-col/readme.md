Колонки разной ширины:
```jsx
    import GridCol from './';
    import GridRow from '../grid-row';
    import range from 'lodash.range';
    import { justifies } from './__stories__/grid-col.stories';
    import '!style-loader!css-loader!sass-loader!./__stories__/grid-col-demo.scss';
    <div className='container-with-border'>
        <p className='title'>Сетка на 12 колонок при разрешении более 960px</p>
        <GridRow>
            <GridCol externalClass='col-with-top-margin' desktop={1}>
            <div className='content-blue'>desktop: 1</div>
            </GridCol>
        </GridRow>
        <GridRow>
        {range(0, 12).map(number => (
          <GridCol key={number} externalClass='col-with-top-margin' desktop={1}>
            <div className='content-blue'>desktop: 1</div>
          </GridCol>
        ))}
        </GridRow>
        <GridRow>
        {range(0, 6).map(number => (
          <GridCol key={number} externalClass='col-with-top-margin' desktop={2}>
            <div className='content-blue'>desktop: 2</div>
          </GridCol>
        ))}
        </GridRow>
        <GridRow>
        {range(0, 4).map(number => (
          <GridCol key={number} externalClass='col-with-top-margin' desktop={3}>
            <div className='content-blue'>desktop: 3</div>
          </GridCol>
        ))}
        </GridRow>
        <GridRow>
        {range(0, 3).map(number => (
          <GridCol key={number} externalClass='col-with-top-margin' desktop={4}>
            <div className='content-blue'>desktop: 4</div>
          </GridCol>
        ))}
        </GridRow>
        <GridRow>
        {range(0, 2).map(number => (
          <GridCol key={number} externalClass='col-with-top-margin' desktop={6}>
            <div className='content-blue'>desktop: 6</div>
          </GridCol>
        ))}
        </GridRow>
        <GridRow>
        <GridCol externalClass='col-with-top-margin' desktop={12} mobile={8}>
          <div className='content-blue'>desktop: 12</div>
        </GridCol>
        </GridRow>
        <p className='title'>Сетка на 8 колонок при разрешении менее 960px</p>
        <GridRow>
          <GridCol externalClass='col-with-top-margin' mobile={1}>
            <div className='content-blue'>mobile: 1</div>
          </GridCol>
        </GridRow>
        <GridRow>
        {range(0, 8).map(number => (
          <GridCol key={number} externalClass='col-with-top-margin' mobile={1}>
            <div className='content-blue'>mobile: 1</div>
          </GridCol>
        ))}
        </GridRow>
        <GridRow>
        {range(0, 4).map(number => (
          <GridCol key={number} externalClass='col-with-top-margin' mobile={2}>
            <div className='content-blue'>mobile: 2</div>
          </GridCol>
        ))}
        </GridRow>
        <GridRow>
        {range(0, 2).map(number => (
          <GridCol key={number} externalClass='col-with-top-margin' mobile={4}>
            <div className='content-blue'>mobile: 4</div>
          </GridCol>
        ))}
        </GridRow>
        <GridRow>
        <GridCol externalClass='col-with-top-margin' mobile={8}>
          <div className='content-blue'>mobile: 8</div>
        </GridCol>
        </GridRow>
    </div>
```
