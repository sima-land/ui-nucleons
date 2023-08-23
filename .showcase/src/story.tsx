import { useMemo } from 'react';
import { render } from 'react-dom';
import { storyModules } from './stories';

function App() {
  const { title, storyName } = useMemo(() => {
    const id = new URLSearchParams(window.location.search).get('id') ?? '';
    const [groupName, rest] = id?.split(/-(.*)/s);
    const [componentName, storyName] = rest?.split('--');

    return {
      title: `${groupName}/${componentName}`,
      storyName,
    };
  }, []);

  const Story = storyModules.find(s => s.title === title)?.stories[storyName];

  return <>{Story ? <Story /> : null}</>;
}

const root = document.createElement('div');

document.body.append(root);

render(<App />, root);
