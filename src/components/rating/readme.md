Стандартный рейтинг:
```jsx
    <div style={{ background: '#fff', padding: '5px' }}>
        <Rating />
    </div>
    <div style={{ background: '#fff', padding: '5px' }}>
        <Rating value={2.6} />
    </div>
    <div style={{ background: '#fff', padding: '5px' }}>
        <Rating value={5} />
    </div>
```
Рейтинг с большой звездой:
```jsx
    <div style={{ background: '#fff', padding: '5px' }}>
        <Rating value={2.6} withBig />
    </div>
    <div style={{ background: '#fff', padding: '5px' }}>
        <Rating value={5} withBig />
    </div>
```
Рейтинг с указанием размеров звёзд и их количества:
```jsx
    <div style={{ background: '#fff', padding: '5px' }}>
        <Rating
            value={3.5}
            count={7}
            starSizes={{
              regular: 10,
              big: 15,
            }}
            withBig
        />
    </div>
    <div style={{ background: '#fff', padding: '5px' }}>
        <Rating
        value={1.5}
        count={3}
        starSizes={{
          regular: 25,
          big: 35,
        }}
        withBig
        />
    </div>
```
Рейтинг с hover-ом и пользовательскими классами:
```jsx
    import styles from './__stories__/custom-rating.scss';
    <div style={{ background: '#fff', padding: '15px'}}>
      <Rating
          value={2}
          customClasses={{
            rating: styles['doc-rating'],
            hoveredRating: styles['doc-rating-can-be-hovered'],
            star: styles['doc-rating-star'],
            emptyStar: styles['doc-empty-star'],
            halfStar: styles['doc-half-star'],
            fullStar: styles['doc-full-star'],
          }}
          withBig
          withHover
      />
    </div>
```
Рейтинг с hover-ом и возможностью менять значение:
```jsx
    initialState = {
        rating: 2,
    };
  
    <div style={{ background: '#fff', padding: '15px'}}>
      <Rating
          value={state.rating}
          onStarClick={index => setState({ rating: index })}
          withHover
      />
    </div>
```
