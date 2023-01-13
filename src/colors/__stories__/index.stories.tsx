import React, { useEffect, useRef } from 'react';
import { COLORS } from '..';
import { Button } from '../../button';
import { Layout } from '../../layout';
import { Input } from '../../input';
import { TextButton } from '../../text-button';
import { useTempHint, WithHint } from '../../with-hint';
import ClipboardJS from 'clipboard';
import CopySVG from '@sima-land/ui-quarks/icons/16x16/Stroked/copy';
import CopyBigSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/copy';
import styles from './colors.module.scss';

export default {
  title: 'tokens/Colors',
  component: COLORS,
  parameters: {
    layout: 'padded',
  },
};

export function Usage() {
  return (
    <Layout>
      <h2>Токены цветов</h2>

      <p>Библиотека предоставляет утилиты для использования цветов дизайн-системы.</p>

      <div className={styles.section}>
        <div className={styles.imports}>
          <ImportField label='Импорт SCSS' value="@use '@sima-land/ui-nucleons/colors';" />
          <ImportField
            label='Импорт JS'
            value="import { COLORS } from '@sima-land/ui-nucleons/colors';"
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.colors}>
          {[...COLORS.entries()].map(([name, value], index) => (
            <ColorView key={index} {...{ name, value }} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function ImportField({ value, label }: { value: string; label: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [hintBind, toggleHint] = useTempHint();

  useEffect(() => {
    if (buttonRef.current) {
      const clipboard = new ClipboardJS(buttonRef.current, { text: () => value });

      clipboard.on('success', () => {
        toggleHint(true);
      });

      return () => clipboard.destroy();
    }
  }, []);

  return (
    <Input
      label={label}
      value={value}
      inputRef={inputRef}
      readOnly
      adornmentEnd={
        <WithHint hint='Скопировано' {...hintBind}>
          {ref => (
            <TextButton
              color='basic-gray87'
              buttonRef={buttonRef}
              onMouseDown={e => e.preventDefault()}
            >
              <CopyBigSVG ref={ref as any} fill='currentColor' />
            </TextButton>
          )}
        </WithHint>
      }
    />
  );
}

function ColorView({ name, value }: { name: string; value: string }) {
  return (
    <div className={styles.color}>
      <span className={styles.circle} style={{ background: value }} />
      <span className={styles.title}>{name}</span>
      <span>{value}</span>

      <CopyButton title='SCSS' value={`colors.$${name}`} />
      <CopyButton title='JS' value={`COLORS.get('$${name}')`} />
    </div>
  );
}

function CopyButton({ title, value }: { title: string; value: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [hintBind, toggleHint] = useTempHint();

  useEffect(() => {
    if (buttonRef.current) {
      const clipboard = new ClipboardJS(buttonRef.current, {
        text: () => value,
      });

      clipboard.on('success', () => {
        toggleHint(true);
      });

      return () => clipboard.destroy();
    }
  }, []);

  return (
    <WithHint hint='Скопировано' {...hintBind}>
      {ref => (
        <div ref={ref as any}>
          <Button ref={buttonRef} size='xs' viewType='secondary' icon={CopySVG}>
            {title}
          </Button>
        </div>
      )}
    </WithHint>
  );
}

Usage.storyName = 'Использование';
