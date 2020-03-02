Таймер

```
import Timer from './index';

<div style={{ background: '#fff', padding: 16 }}>
    <Timer 
        endTime='2020-03-08'
        format='D д., hh:mm:ss'
        timeProps={{
            className: 'timer',
            style: {
                display: 'inline-block',
                padding: 10,
                margin: '5px 0',
                background: '#eee',
            },
        }}
    />
</div>
```
