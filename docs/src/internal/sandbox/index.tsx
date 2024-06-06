import { ElementType, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { validStories } from '#valid-stories';

function getParameter(key: string, meta: any): any {
  return meta?.parameters?.[key];
}

function SandboxApp() {
  const [pathname, setPathname] = useState<string | null>(null);

  const story = useMemo(() => validStories.find(item => item.pathname === pathname), [pathname]);

  useEffect(() => {
    setPathname(new URL(window.location.href).searchParams.get('path'));
  }, []);

  useEffect(() => {
    if (story?.meta?.title) {
      document.title = story.meta.title;
    }
  }, [story]);

  useEffect(() => {
    const backgrounds = getParameter('backgrounds', story?.meta);

    if (typeof backgrounds?.default === 'string') {
      document.documentElement.style.setProperty('background', `${backgrounds.default}`);
    }
  }, [story]);

  const Component = story?.default as ElementType;

  if (!Component) {
    return null;
  }

  return <Component />;
}

createRoot(document.getElementById('root')!).render(<SandboxApp />);
