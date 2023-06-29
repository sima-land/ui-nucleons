import { Title, Subtitle, Description, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';

export const parameters = {
  layout: 'padded',
  docs: {
    inlineStories: false,
    iframeHeight: 320,
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <ArgsTable story={PRIMARY_STORY} />
      </>
    ),
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'custom:gray',
        value: '#ccc',
      },
    ],
  },
};
