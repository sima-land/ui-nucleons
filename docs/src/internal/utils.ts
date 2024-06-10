import { z } from 'zod';

/**
 * Результат экспорта story-модуля, прошедшего валидацию.
 */
export type StoryModule = z.infer<typeof StoryModuleSchema>;

export interface MenuNode {
  type: string;
}

export interface StoryMenuNode extends MenuNode {
  type: 'story';
  title: string;
  category?: string;
  story: StoryModule;
}

export interface GroupMenuNode extends MenuNode {
  type: 'group';
  title: string;
  items: AnyMenuNode[];
}

export type AnyMenuNode = StoryMenuNode | GroupMenuNode;

/**
 * Схема для дальнейшего отсеивания невалидных story-модулей.
 */
export const StoryModuleSchema = z.object({
  default: z.function(),

  meta: z.object({
    title: z.string(),
    category: z.string().optional(),
    parameters: z
      .object({
        layout: z.enum(['padded', 'fullscreen']).optional(),
        backgrounds: z.object({ default: z.string() }).optional(),
        sources: z.boolean().optional(),
      })
      .optional(),
  }),

  metaJson: z
    .object({
      parameters: z.object({
        sources: z.union([
          z.boolean(),
          z.object({
            extraSources: z.array(z.string()),
          }),
        ]),
      }),
    })
    .optional(),

  pathname: z.string(),
  source: z.string(),

  extraSources: z.array(
    z.object({
      title: z.string(),
      source: z.string(),
    }),
  ),
});

/**
 * Получив список story-модулей сформирует меню с группами по значениям в полях category.
 * @inheritdoc
 */
export function getMenuItems(stories: StoryModule[]): AnyMenuNode[] {
  // создаем узел меню из объекта story
  const nodes = stories.map<StoryMenuNode>(story => ({
    type: 'story',
    title: story.meta.title,
    category: story.meta.category,
    story,
  }));

  nodes.sort((a, b) => (a.category && b.category ? a.category.localeCompare(b.category) : 0));

  return groupMenuNodes(nodes);
}

/**
 * Получив список узлов меню сгруппирует их по значениям в полях category.
 * @inheritdoc
 */
function groupMenuNodes(nodes: AnyMenuNode[]): AnyMenuNode[] {
  // рекурсивно применяем группировку узлов по полю category
  return nodes.reduce<AnyMenuNode[]>(groupStoriesByFirstSegment, []).map(node =>
    node.type === 'group'
      ? {
          ...node,
          items: groupMenuNodes(node.items),
        }
      : node,
  );
}

/**
 * Reducer для группировки списка узлов меню.
 * @inheritdoc
 */
function groupStoriesByFirstSegment(state: AnyMenuNode[], node: AnyMenuNode): AnyMenuNode[] {
  // если это уже группа - оставляем как есть
  if (node.type === 'group') {
    state.push(node);
    return state;
  }

  // разбиваем строку category на сегменты
  const segments = node.category?.includes('/')
    ? node.category.split('/').filter(Boolean)
    : [node.category ?? ''];

  // первый сегмент - целевая группа, остальные будут обработаны далее рекурсией
  const [groupName, ...restSegments] = segments;

  // создаем новый узел на основе старого
  const newNode: StoryMenuNode = {
    ...node,
    title: node.title,
    category: restSegments.join('/') || undefined,
  };

  // если нет имени группы оставляем узел на том уровне на котором он был
  if (groupName === '') {
    state.push(newNode);
    return state;
  }

  // ищем группу по имени, тк возможно уже создали ее на предыдущем шаге цикла
  const foundGroup = state.find(
    (item): item is GroupMenuNode => item.type === 'group' && item.title === groupName,
  );

  // помещаем новый узел в новую или существующую группу
  if (foundGroup) {
    foundGroup.items.push(newNode);
  } else {
    state.push({ type: 'group', title: groupName, items: [newNode] });
  }

  return state;
}
