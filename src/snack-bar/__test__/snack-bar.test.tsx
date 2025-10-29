import { fireEvent, render } from '@testing-library/react';
import { SnackBar } from '../snack-bar';
import {
  SnackBarEndIcon,
  SnackBarImage,
  SnackBarStartIcon,
  SnackBarSubtitle,
  SnackBarTitle,
} from '../slots';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';
import { Button } from '../../button';
import { TextButton } from '../../text-button';

describe('SnackBar', () => {
  it('should render with icons and button', () => {
    const { container, getAllByText } = render(
      <SnackBar>
        <SnackBarStartIcon icon={<PlaceholderSVG />} />
        <SnackBarTitle>Title</SnackBarTitle>
        <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
        <Button size='xs' viewType='secondary'>
          Button action
        </Button>
        <SnackBarEndIcon icon={<PlaceholderSVG />} />
      </SnackBar>,
    );
    expect(getAllByText('Title')).toHaveLength(1);
    expect(getAllByText('Subtitle')).toHaveLength(1);
    expect(getAllByText('Button action')).toHaveLength(1);
    expect(container.querySelectorAll('svg')).toHaveLength(2);
  });

  it('should render with image and textbutton', () => {
    const { container, getAllByText } = render(
      <SnackBar>
        <SnackBarImage src='baggi.png' />
        <SnackBarTitle>Title</SnackBarTitle>
        <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
        <TextButton size='s'>Text button action</TextButton>
        <SnackBarEndIcon icon={<PlaceholderSVG />} />
      </SnackBar>,
    );
    expect(getAllByText('Title')).toHaveLength(1);
    expect(getAllByText('Subtitle')).toHaveLength(1);
    expect(getAllByText('Text button action')).toHaveLength(1);
    expect(container.querySelectorAll('img')).toHaveLength(1);
    expect(container.querySelectorAll('img')[0].getAttribute('src')).toBe('baggi.png');
  });
  it('should render image when passed image and start icon', () => {
    const { container } = render(
      <SnackBar>
        <SnackBarImage src='baggi.png' />
        <SnackBarStartIcon icon={<PlaceholderSVG />} />
        <SnackBarTitle>Title</SnackBarTitle>
      </SnackBar>,
    );
    expect(container.querySelectorAll('img')).toHaveLength(1);
    expect(container.querySelectorAll('svg')).toHaveLength(0);
  });
  it('shouldn`t render subtitle if title was not passed', () => {
    const { queryAllByText } = render(
      <SnackBar>
        <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
      </SnackBar>,
    );
    expect(queryAllByText('Subtitle')).toHaveLength(0);
  });
  it('should render button when passed button and text button', () => {
    const { queryAllByText } = render(
      <SnackBar>
        <Button size='xs' viewType='secondary'>
          Button action
        </Button>
        <TextButton size='s'>Text button action</TextButton>
      </SnackBar>,
    );
    expect(queryAllByText('Button action')).toHaveLength(1);
    expect(queryAllByText('Text button action')).toHaveLength(0);
  });
  it('should close on outside click', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <>
        <div>Outside trigger</div>
        <SnackBar onClose={onClose}>
          <SnackBarTitle>Title</SnackBarTitle>
          <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
          <SnackBarEndIcon icon={<PlaceholderSVG />} />
        </SnackBar>
      </>,
    );
    expect(onClose).not.toHaveBeenCalled();
    fireEvent.click(getByText('Outside trigger'));
    expect(onClose).toHaveBeenCalled();
  });
  it('should handle mount', () => {
    const onMount = jest.fn();
    render(
      <SnackBar onMount={onMount}>
        <SnackBarTitle>Title</SnackBarTitle>
        <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
        <SnackBarEndIcon icon={<PlaceholderSVG />} />
      </SnackBar>,
    );
    expect(onMount).toHaveBeenCalled();
  });
  it('should handle click on icon', () => {
    const onClick = jest.fn();
    const onBarClick = jest.fn();
    const { container } = render(
      <SnackBar onClick={onBarClick}>
        <SnackBarTitle>Title</SnackBarTitle>
        <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
        <SnackBarEndIcon icon={<PlaceholderSVG />} onClick={onClick} />
      </SnackBar>,
    );
    expect(onClick).not.toHaveBeenCalled();
    expect(onBarClick).not.toHaveBeenCalled();
    const icon = container.querySelector('svg');
    icon && fireEvent.click(icon);
    expect(onClick).toHaveBeenCalled();
    expect(onBarClick).not.toHaveBeenCalled();
  });
});
