import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import stories from '#stories';

function SandboxApp() {
  const [pathname, setPathname] = useState<string | null>(null);

  useEffect(() => {
    setPathname(new URL(window.location.href).searchParams.get('path'));
  }, []);

  const story = stories.find(item => item.pathname === pathname);
  const Component = story?.default;

  if (!Component) {
    return null;
  }

  return <Component />;
}

createRoot(document.getElementById('root')!).render(<SandboxApp />);
