import { GRADIENTS } from '@sima-land/ui-nucleons/gradients';
import { ReactNode, useEffect, useRef, useState } from 'react';
import ClipboardJS from 'clipboard';
import { Button } from '@sima-land/ui-nucleons/button';
import { Input } from '@sima-land/ui-nucleons/input';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import CopySVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Copy';
import CopyBigSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Copy';
import styles from './usage.m.scss';

export function GradientPicker() {
  return (
    <>
      <h2>Градиенты</h2>

      <p>Библиотека предоставляет утилиты для использования градиентов дизайн-системы.</p>

      <div className={styles.imports}>
        <ImportField label='Импорт SCSS' value="@use 'pkg:@sima-land/ui-nucleons/gradients';" />
        <ImportField
          label='Импорт JS'
          value="import { GRADIENTS } from '@sima-land/ui-nucleons/gradients';"
        />
      </div>

      <CardGrid>
        {[...GRADIENTS.entries()].map(([name, value], index) => (
          <TokenCard
            key={index}
            name={name}
            value={value}
            usageToken={`gradient/${name}`}
            usageScss={`gradients.$${name}`}
            usageJs={`GRADIENTS.get('${name}')`}
          />
        ))}
      </CardGrid>
    </>
  );
}

export function ImportField({ value, label }: { value: string; label: string }) {
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

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}

export function TokenCard({
  name,
  value,
  usageToken: token,
  usageScss: scss,
  usageJs: js,
}: {
  name: string;
  value: string;
  usageToken: string;
  usageScss: string;
  usageJs: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.sample} style={{ background: value }}></div>

      <div className={styles.info}>
        <span className={styles.title}>{name}</span>
        <span className={styles.value}>{value}</span>
      </div>

      <div className={styles.controls}>
        <CopyButton title='Токен' value={token} />
        <CopyButton title='SCSS' value={scss} />
        <CopyButton title='JS' value={js} />
      </div>
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
    <Button
      ref={buttonRef}
      size='xs'
      viewType='secondary'
      icon={!copied ? CopySVG : undefined}
      disabled={copied}
    >
      {copied ? 'Скопировано' : title}
    </Button>
  );
}
