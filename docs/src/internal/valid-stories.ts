import { type StoryModule, StoryModuleSchema, getMenuItems } from './utils';
import storiesRaw from '#found-stories';

export const validStories = storiesRaw.reduce<StoryModule[]>((result, item) => {
  const parseResult = StoryModuleSchema.safeParse(item);

  if (parseResult.success) {
    result.push(parseResult.data);
  }

  return result;
}, []);

export const menuItems = getMenuItems(validStories);
