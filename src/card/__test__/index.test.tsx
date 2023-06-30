import { render } from '@testing-library/react';
import { Card, CardContent } from '..';
import { TopBar } from '../../top-bar';
import { BottomBar } from '../../bottom-bar';
import { MediumRounds, SmallRounds } from '../../styling/shapes';

describe('Card', () => {
  it('should renders parts in strict order', () => {
    const { container } = render(
      <Card>
        <CardContent>[content]</CardContent>
        <BottomBar>[footer]</BottomBar>
        <TopBar title='[header]' />
      </Card>,
    );

    expect(container.textContent).toBe('[header][content][footer]');
  });

  it('should renders slots in strict order', () => {
    const { container } = render(
      <Card>
        <Card.Content>[content]</Card.Content>
        <Card.Footer>[footer]</Card.Footer>
        <Card.Header>[header]</Card.Header>
      </Card>,
    );

    expect(container.textContent).toBe('[header][content][footer]');
  });

  it('should renders slots and CardContent in strict order', () => {
    const { container } = render(
      <Card>
        <Card.Footer>[footer]</Card.Footer>
        <Card.Header>[header]</Card.Header>
        <CardContent>[content]</CardContent>
      </Card>,
    );

    expect(container.textContent).toBe('[header][content][footer]');
  });

  it('should provide rounds for TopBar based on "rounds" prop', () => {
    const { getByTestId, rerender } = render(
      <Card rounds='s'>
        <TopBar title='Hello!' />
        <CardContent>Some content here</CardContent>
      </Card>,
    );

    expect(getByTestId('top-bar').classList.contains(SmallRounds.top)).toBe(true);
    expect(getByTestId('top-bar').classList.contains(MediumRounds.top)).toBe(false);

    rerender(
      <Card rounds='m'>
        <TopBar title='Hello!' />
        <CardContent>Some content here</CardContent>
      </Card>,
    );

    expect(getByTestId('top-bar').classList.contains(SmallRounds.top)).toBe(false);
    expect(getByTestId('top-bar').classList.contains(MediumRounds.top)).toBe(true);
  });
});
