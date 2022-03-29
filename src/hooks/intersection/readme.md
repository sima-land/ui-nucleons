# Утилиты для unit-тестирования

Утилиты для unit-тестирования (Jest) компонентов, использующих хук `useIntersection`

#### Пример компонента

```jsx
import { useIntersection } from '@sima-land/ui-nucleons/hooks/intersection';

const TestComponent = () => {
  const ref = useRef(null);
  const [viewing, setViewing] = useState(false);

  useIntersection(ref, entry => {
    setViewing(entry.isIntersecting);
  });

  return (
    <div ref={ref} data-testid='test-target'>
      {viewing ? 'On screen' : 'Off screen'}
    </div>
  );
};
```

#### Пример тестов

```jsx
import { IntersectionMock } from '@sima-land/ui-nucleons/hooks/intersection/test-utils';

const intersectionMock = new IntersectionMock();

beforeAll(() => {
  intersectionMock.apply();
});

afterAll(() => {
  intersectionMock.restore();
});

it('test component', () => {
  const { asFragment, getByTestId } = render(<TestComponent />);
  const target = getByTestId('test-target');

  expect(asFragment().textContent).toContain('Off screen');

  intersectionMock.changeElementState({
    target,
    isIntersecting: true,
    intersectionRatio: 0,
  });

  expect(asFragment().textContent).toContain('On screen');
});
```
