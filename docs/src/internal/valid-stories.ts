import { type StoryModule, StoryModuleSchema } from '../../.build/schemas';
import { getMenuItems } from './utils';
import storiesRaw from '#found-stories';

const invalid: unknown[] = [];

export const validStories = storiesRaw.reduce<StoryModule[]>((result, item) => {
  const parseResult = StoryModuleSchema.safeParse(item);

  if (parseResult.success) {
    result.push(parseResult.data);
  } else {
    invalid.push(item);
  }

  return result;
}, []);

export const menuItems = getMenuItems(validStories);

if (invalid.length > 0) {
  // eslint-disable-next-line no-console
  console.error('Found invalid stories:', invalid);
}
