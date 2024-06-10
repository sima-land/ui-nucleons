import { COLORS } from '@sima-land/ui-nucleons/colors';
import { useEffect, useRef, useState } from 'react';
import ClipboardJS from 'clipboard';
import { Button } from '@sima-land/ui-nucleons/button';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Input } from '@sima-land/ui-nucleons/input';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import CopySVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Copy';
import CopyBigSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Copy';
import styles from './usage.m.scss';

export const meta = {
  category: 'Токены/Colors',
  title: 'Использование',
  parameters: {
    layout: 'padded',
  },
};

export default function Usage() {
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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (buttonRef.current) {
      const clipboard = new ClipboardJS(buttonRef.current, { text: () => value });

      clipboard.on('success', () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });

      return () => clipboard.destroy();
    }
  }, []);

  return (
    <Input
      label={label}
      value={copied ? 'Скопировано' : value}
      disabled={copied}
      inputRef={inputRef}
      readOnly
      adornmentEnd={
        <TextButton
          disabled={copied}
          color='basic-gray87'
          buttonRef={buttonRef}
          onMouseDown={e => e.preventDefault()}
        >
          <CopyBigSVG fill='currentColor' />
        </TextButton>
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
      <CopyButton title='JS' value={`COLORS.get('${name}')`} />
    </div>
  );
}

function CopyButton({ title, value }: { title: string; value: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (buttonRef.current) {
      const clipboard = new ClipboardJS(buttonRef.current, {
        text: () => value,
      });

      clipboard.on('success', () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });

      return () => clipboard.destroy();
    }
  }, []);

  return (
    <div>
      <Button
        ref={buttonRef}
        size='xs'
        viewType='secondary'
        icon={!copied ? CopySVG : undefined}
        disabled={copied}
      >
        {copied ? 'Скопировано' : title}
      </Button>
    </div>
  );
}
