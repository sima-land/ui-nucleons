import { render } from 'react-dom';
import { useState } from 'react';
import { upperFirst } from 'lodash';
import { storyModuleGroups } from './stories';
import { Article, Aside, Container, Header, Main } from './views/layout';
import { Nav, NavItem, NavItemBody, NavItemTitle } from './views/nav';
import './index.css';

function App() {
  const [selected, setSelected] = useState<{ moduleTitle: string; storyName: string } | null>(null);

  return (
    <Container>
      <Header title='UI-nucleons' />
      <Main>
        <Aside>
          <Nav>
            <StoriesNavItems
              selectedModuleTitle={selected?.moduleTitle}
              onItemSelect={setSelected}
            />
          </Nav>
        </Aside>
        <Article>
          {selected !== null && (
            <div className='story-view'>
              <div className='story-view-header'>
                <a
                  href={`/story.html?id=${selected.moduleTitle.split('/').join('-')}--${
                    selected.storyName
                  }`}
                  target='_blank'
                >
                  В новой вкладке
                </a>
              </div>
              <iframe
                className='story-iframe'
                src={`/story.html?id=${selected.moduleTitle.split('/').join('-')}--${
                  selected.storyName
                }`}
              ></iframe>
            </div>
          )}
        </Article>
      </Main>
    </Container>
  );
}

function StoriesNavItems({
  selectedModuleTitle,
  onItemSelect,
}: {
  onItemSelect?: (story: any) => void;
  selectedModuleTitle?: string;
}) {
  return (
    <>
      {storyModuleGroups.map(group => (
        <NavItem key={group.name}>
          <NavItemTitle>{upperFirst(group.name)}</NavItemTitle>
          <NavItemBody>
            {group.storyModules.map(storyModule => (
              <NavItem key={storyModule.title}>
                <NavItemTitle
                  onClick={() => {
                    onItemSelect?.({
                      moduleTitle: storyModule.title,
                      storyName: Object.keys(storyModule.stories)[0],
                    });
                  }}
                >
                  {storyModule.displayTitle ?? storyModule.title}
                </NavItemTitle>
                {selectedModuleTitle?.startsWith(storyModule.title) && (
                  <NavItemBody>
                    {Object.values(storyModule.stories).map(story => (
                      <NavItem key={story.name}>
                        <NavItemTitle
                          onClick={() => {
                            onItemSelect?.({
                              moduleTitle: storyModule.title,
                              storyName: story.name,
                            });
                          }}
                        >
                          {story.storyName || story.name}
                        </NavItemTitle>
                      </NavItem>
                    ))}
                  </NavItemBody>
                )}
              </NavItem>
            ))}
          </NavItemBody>
        </NavItem>
      ))}
    </>
  );
}

const root = document.createElement('div');

document.body.append(root);

render(<App />, root);
