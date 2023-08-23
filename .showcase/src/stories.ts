import { ElementType } from 'react';
import { modules } from 'stories';

interface StoryModule {
  title: string;
  displayTitle?: string;

  // @todo array instead of record
  stories: Record<string, ElementType & { storyName?: string; name?: string }>;
}

interface StoryGroup {
  name: string;
  storyModules: StoryModule[];
}

export const storyModules: StoryModule[] = Object.values(
  modules.reduce<Record<string, StoryModule>>((acc, storyModule: any) => {
    const { default: meta, ...stories } = storyModule;

    if (!acc[meta.title]) {
      acc[meta.title] = {
        title: meta.title,
        stories: {},
      };
    }

    Object.assign(acc[meta.title].stories, stories);

    return acc;
  }, {}),
);

export const storyModuleGroups = storyModules.reduce<StoryGroup[]>((acc, item) => {
  const [groupName, displayTitle] = item.title.split('/');

  if (groupName) {
    const foundGroup = acc.find(g => g.name === groupName);

    if (foundGroup) {
      foundGroup.storyModules.push({ ...item, displayTitle });
    } else {
      acc.push({ name: groupName, storyModules: [{ ...item, displayTitle }] });
    }
  }

  return acc;
}, []);
