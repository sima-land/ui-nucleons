import React, { useEffect, useState } from 'react';
import { WithHint, useTempHint } from '..';

const styles: Record<string, React.CSSProperties> = {
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  opener: {
    padding: 8,
    fontSize: 18,
    display: 'inline-flex',
    background: '#eee',
    cursor: 'pointer',
    borderRadius: 4,
    marginTop: 48,
  },
};

export default {
  title: 'hint/WithHint',
  component: WithHint,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <div style={styles.root}>
    {(['right', 'bottom', 'left', 'top'] as const).map(direction => (
      <WithHint
        key={direction}
        direction={direction}
        hint={<>Первая строчка.<br />И вторая строчка.</>}
      >
        {(ref, toggle) => (
          <div
            ref={ref as any}
            onMouseEnter={() => toggle(true)}
            onMouseLeave={() => toggle(false)}
            style={styles.opener}
          >
            Наведи на меня
          </div>
        )}
      </WithHint>
    ))}
  </div>
);

export const AutoClosing = () => {
  const [data, setData] = useState<string>();
  const [shown, toggle] = useTempHint();

  useEffect(() => {
    if (data) {
      toggle(true);
    }
  }, [data, toggle]);

  const fakeFetch = () => {
    setData(`Новый хинт! (${Date.now()})`);
  };

  return (
    <div style={styles.root}>
      <WithHint shown={shown} hint={data}>
        {ref => (
          <div ref={ref as any} style={styles.opener} onClick={fakeFetch}>
            Нажми на меня
          </div>
        )}
      </WithHint>
    </div>
  );
};
